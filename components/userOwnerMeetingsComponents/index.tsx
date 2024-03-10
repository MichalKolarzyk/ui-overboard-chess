import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import {
  UserOwnerMeetingsContext,
  UserOwnerMeetingsProvider,
  useUserOwnerMeetingsContext,
} from "./UserOwnerMeetingsContext";
import UserOwnerMeeting from "./UserOwnerMeeting";

const Main = (props: any) => {
  return (
    <UserOwnerMeetingsContext.Provider value={UserOwnerMeetingsProvider()}>
      {props.children}
    </UserOwnerMeetingsContext.Provider>
  );
};

const Meetings = (props: MeetingsProps) => {
  const context = useUserOwnerMeetingsContext();
  if (context.isLoading) {
    return <ActivityIndicator size="large" />;
  }

  const meetingsComponent = context.meetings?.map?.((m) => <UserOwnerMeeting onPress={() => props.onPress(m.meetingId)} meeting={m} key={m.meetingId}/>);
  return (
    <View>
      {meetingsComponent}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: "white",
    paddingHorizontal: 8,
  },
  mainView: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 8,
    alignItems: "center"
  },
  hintInfo: {
    borderBottomColor: "white",
    flexDirection: "row",
    gap: 4,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hitn: {
    color: "grey",
    fontSize: 12,
  },
});

export interface MeetingsProps{
  onPress: (meetingId: string) => void;
}

const UserOwnerMeetings = { Main, Meetings };
export default UserOwnerMeetings;
