import { View, Text, ActivityIndicator } from "react-native";
import {
  UserOwnerMeetingsContext,
  UserOwnerMeetingsProvider,
  useUserOwnerMeetingsContext,
} from "./UserOwnerMeetingsContext";

const Main = (props: any) => {
  return (
    <UserOwnerMeetingsContext.Provider value={UserOwnerMeetingsProvider()}>
      {props.children}
    </UserOwnerMeetingsContext.Provider>
  );
};

const Meetings = () => {
  const context = useUserOwnerMeetingsContext();
  if (context.isLoading) {
    return <ActivityIndicator size="large" />;
  }

  const meetingsComponent = context.meetings?.map?.((m) => <Text>{m.meetingTitle}</Text>);
  return (
    <View>
      <Text style={{ fontSize: 25, paddingHorizontal: 5}}>Owned Meetings</Text>
      {meetingsComponent}
    </View>
  );
};


const UserOwnerMeetings = { Main, Meetings };
export default UserOwnerMeetings;
