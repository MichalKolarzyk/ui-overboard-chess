import { Button, View, Text } from "react-native";
import { LoginWithEmailContext, LoginWithEmailProvider, useLoginWithEmailContext } from "./LoginWithEmailContext";
import { StringInput } from "../baseComponents";

const Main = (props: LoginWithEmailProps) => {
    return <LoginWithEmailContext.Provider value={LoginWithEmailProvider()}>
        {props.children}
    </LoginWithEmailContext.Provider>
}

export interface LoginWithEmailProps{
    children: any,
    afterConfirm?: () => void;
    afterSendEmail?: () => void;
}

const SendEmail = (props: SendEmailProps) => {
    const context = useLoginWithEmailContext();

    const onPress = async () => {
        await context.sendEmail();
        props.afterSendEmail?.();
    }

    return <View>
        <StringInput disabled={context.isLoading} value={context.email} setValue={context.setEmail} />
        <Button disabled={context.isLoading} onPress={onPress} title="Send email"/>
    </View>
}

const ConfirmEmail = (props: ConfirmEmailProps) => {
    const context = useLoginWithEmailContext();

    const onPress = async () => {
        await context.confirm(props.afterConfirmEmail);
    }

    return <View>
        <StringInput value={context.code} setValue={context.setCode} />
        <Text>{context.codeError}</Text>
        <Button disabled={context.isLoading || !context.canConfirm} onPress={onPress} title="Confirm"/>
    </View>
}


export interface ConfirmEmailProps{
    afterConfirmEmail?: () => void;
}
export interface SendEmailProps{
    afterSendEmail?: () => void;
}

const LoginWithEmail = {Main, SendEmail, ConfirmEmail}
export default LoginWithEmail;