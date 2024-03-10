import { View, Text, ActivityIndicator, StyleSheet, Pressable } from "react-native";
import { FindMeetingsResponse } from "../../hooks/overboardApiHooks/models/MeetingsModels";
import { DateViewModel } from "../../models/DateViewModel";
import { Fontisto } from "@expo/vector-icons";

const UserOwnerMeeting = (props: UserOwnerMeetingProps) => {
  const meeting = props.meeting;
  const date = new DateViewModel(props.meeting.meetingStartDate);
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
        <Fontisto name="favorite" size={30} color="black" />
        <View style={{ flexGrow: 1, gap: 15 }}>
          <View style={styles.topView}>
            <View style={styles.hintInfo}>
              <Text style={styles.hitn}>in days:</Text>
              <Text>{date.getDate()}</Text>
            </View>
            <View style={styles.hintInfo}>
              <Text style={styles.hitn}>at:</Text>
              <Text>
                {date.getHours()}:{date.getMinutes()}
              </Text>
            </View>
          </View>
          <View style={styles.topView}>
            <Text style={{ fontStyle: "italic" }}>{props?.meeting?.meetingTitle}</Text>
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
    gap: 20,
    marginBottom: 8,
    alignItems: "center",
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

export interface UserOwnerMeetingProps {
  meeting: FindMeetingsResponse;
  onPress: () => void;
}


export default UserOwnerMeeting;
