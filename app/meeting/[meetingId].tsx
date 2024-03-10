import { useLocalSearchParams } from "expo-router/src/hooks"
import { View, Text } from "react-native";
import Meeting from "../../components/meetingComponents";

const MeetingPage = () => {
    const {meetingId} = useLocalSearchParams();

    return <View>
        <Meeting.Main meetingId={meetingId.toString()}>
            <Meeting.Informations/>
            <Meeting.Join/>
            <Meeting.Delete/>
        </Meeting.Main>
    </View>
}

export default MeetingPage;