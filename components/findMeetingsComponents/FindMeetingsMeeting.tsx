import { FindMeetingsResponse } from "../../hooks/overboardApiHooks/models/MeetingsModels";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DateViewModel } from "../../models/DateViewModel";

const FindMeetingsMeeting = (props: FindMeetingsMeetingProps) => {
  const date = DateViewModel.FromString(props.meeting.meetingStartDate);
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "transparent",
        },
        styles.container,
      ]}
      onPress={props.onPress}
    >
      <View style={styles.mainView}>
        <MaterialIcons name="location-on" size={30} color="white" />
        <View style={{flexGrow: 1, gap: 15}}>
          <View style={styles.topView}>
            <View style={styles.hintInfo}>
              <Text style={styles.hitn}>owner:</Text>
              <Text>{props?.meeting?.userOwnerName}</Text>
            </View>
            <View style={styles.hintInfo}>
              <Text style={styles.hitn}>in days:</Text>
              <Text>
                {date.getDate()}
              </Text>
            </View>
            <View style={styles.hintInfo}>
              <Text style={styles.hitn}>at:</Text>
              <Text>
                {date.getHours()}:{date.getMinutes()}
              </Text>
            </View>
          </View>
          <View style={styles.topView}>
            <Text style={{fontStyle: "italic"}}>{props?.meeting?.meetingTitle}</Text>
          </View>
        </View>
      </View>
    </Pressable>
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

export class FindMeetingsMeetingProps {
  meeting: FindMeetingsResponse;
  onPress?: () => void;
}

export default FindMeetingsMeeting;
