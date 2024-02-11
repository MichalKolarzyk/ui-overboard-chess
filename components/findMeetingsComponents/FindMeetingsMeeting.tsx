import { FindMeetingsResponse } from "../../hooks/overboardApiHooks/models/FindMeetingsModels";
import { StyleSheet, Pressable, Text, View } from "react-native";

const FindMeetingsMeeting = (props: FindMeetingsMeetingProps) => {
 
    const date = new Date(props.meeting.meetingStartDate);
    return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "transparent",
        },
        styles.container,
      ]}
      onPress={() => {}}
    >
      <View style={styles.topView}>
        <Text>{props?.meeting?.userOwnerName}</Text>
        <Text>{props?.meeting?.meetingTitle}</Text>
      </View>
      <Text>{date.getDate()}.0{date.getUTCMonth()+1}.{date.getFullYear()}</Text>
      <Text>{date.getHours()}:{date.getMinutes()}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: "white",
    paddingHorizontal: 16,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export class FindMeetingsMeetingProps {
  meeting: FindMeetingsResponse;
}

export default FindMeetingsMeeting;
