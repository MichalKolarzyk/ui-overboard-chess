import { ScrollView, View, StyleSheet, Text } from "react-native";
import FindMeetings from "../../components/findMeetingsComponents";
import UserOwnerMeetings from "../../components/userOwnerMeetingsComponents";
import { Link } from "expo-router";
import useAppNavigation, { AppLocation } from "../../hooks/useAppNavigation";

const FindMeetingsPage = () => {
  const navigation = useAppNavigation();

  return (
    <ScrollView style={{ flexDirection: "column", gap: 5 }}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My meetings</Text>
          <Link style={styles.sectionLink} href={""}>
            see all
          </Link>
        </View>
        <UserOwnerMeetings.Main>
          <UserOwnerMeetings.Meetings onPress={(meetingId) => navigation.push(AppLocation.meeting(meetingId))} />
        </UserOwnerMeetings.Main>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Find new</Text>
          <Link style={styles.sectionLink} href={""}>
            see all
          </Link>
        </View>
        <FindMeetings.Main maxItems={10}>
          <FindMeetings.Meetings onPress={(meetingId) => navigation.push(AppLocation.meeting(meetingId))} />
        </FindMeetings.Main>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#282828",
    marginBottom: 20,
    borderRadius: 10,
    paddingTop: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionLink: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
});
export default FindMeetingsPage;
