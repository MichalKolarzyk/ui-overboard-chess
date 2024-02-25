import { TextInput, Text, View, Button } from "react-native"
import { CreateMeetingContext, CreateMeetingProvider, useCreateMeetingContext } from "./CreateMeetingContext";

const Main = (props: any) => {
    return (
        <CreateMeetingContext.Provider value={CreateMeetingProvider()}>
          {props.children}
        </CreateMeetingContext.Provider>
      );
}

const Form = () => {
    const context = useCreateMeetingContext();

    return <View>
        <Text>Meeting title</Text>
        <TextInput editable={!context.isLoading} value={context.title} onChangeText={context.setTitle}/>
        <Text style={{color: 'red'}}>{context.titleError}</Text>
    </View>
}

const Submit = () => {
    const context = useCreateMeetingContext();
    return <Button disabled={!context.canCreate || context.isLoading} onPress={context.create} title="Create"/>
}

export const CreateMeeting = {Main, Form, Submit}