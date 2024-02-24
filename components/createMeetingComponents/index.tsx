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
        <TextInput value={context.title} onChangeText={context.setTitle}/>
    </View>
}

const Submit = () => {
    const context = useCreateMeetingContext();


    return <Button onPress={context.create} title="Create"/>
}

export const CreateMeeting = {Main, Form, Submit}