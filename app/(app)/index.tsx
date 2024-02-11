import { View} from "react-native";
import FindMeetings from "../../components/findMeetingsComponents";
import { PageStyles } from "../../styles";

const FindMeetingsPage = () => {
    return <View style={PageStyles.default}>
        <FindMeetings.Main>
            <FindMeetings.Meetings/>
        </FindMeetings.Main>
    </View>
}

export default FindMeetingsPage;