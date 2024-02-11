import { View} from "react-native";
import FindMeetings from "../../components/findMeetingsComponents";

const FindMeetingsPage = () => {
    return <View>
        <FindMeetings.Main>
            <FindMeetings.Meetings/>
        </FindMeetings.Main>
    </View>
}

export default FindMeetingsPage;