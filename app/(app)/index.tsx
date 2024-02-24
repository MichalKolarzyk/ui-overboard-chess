import { View } from "react-native";
import FindMeetings from "../../components/findMeetingsComponents";
import { PageStyles } from "../../styles";
import { UserOwnerMeetingsContext } from "../../components/userOwnerMeetingsComponents/UserOwnerMeetingsContext";
import UserOwnerMeetings from "../../components/userOwnerMeetingsComponents";

const FindMeetingsPage = () => {
  return (
    <View style={PageStyles.default}>
      <UserOwnerMeetings.Main>
        <UserOwnerMeetings.Meetings />
      </UserOwnerMeetings.Main>
      <FindMeetings.Main>
        <FindMeetings.Meetings />
      </FindMeetings.Main>
    </View>
  );
};

export default FindMeetingsPage;
