import { TextInput, Text, View, Button,StyleSheet } from "react-native";
import { CreateMeetingContext, CreateMeetingProvider, useCreateMeetingContext } from "./CreateMeetingContext";
import { DateInput, TimeInput } from "../baseComponents";

const Main = (props: any) => {
  return (
    <CreateMeetingContext.Provider value={CreateMeetingProvider()}>{props.children}</CreateMeetingContext.Provider>
  );
};

const Form = () => {
  const context = useCreateMeetingContext();

  return (
    <View>
      <Text>Title</Text>
      <TextInput editable={!context.isLoading} value={context.title} onChangeText={context.setTitle} />
      <Text style={{ color: "red" }}>{context.titleError}</Text>
      <Text>Start</Text>
      <DateInput date={context.start} setDate={context.setStart}/>
      <Text>At</Text>
      <TimeInput date={context.start} setDate={context.setStart}/>
    </View>
  );
};

const Submit = () => {
  const context = useCreateMeetingContext();
  return <Button disabled={!context.canCreate || context.isLoading} onPress={context.create} title="Create" />;
};

export const CreateMeeting = { Main, Form, Submit };

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });