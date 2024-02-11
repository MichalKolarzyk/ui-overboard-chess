import { Button, View} from "react-native";
import FindMeetings from "../../components/findMeetingsComponents";
import { useSession } from "../../hooks/sessionHooks";

const FindMeetingsPage = () => {
    const session = useSession();

    return <View>
        <FindMeetings.Main>
            <FindMeetings.Meetings/>
        </FindMeetings.Main>

        <Button title="logout" onPress={() => session.logout()}/>
    </View>
}

export default FindMeetingsPage;