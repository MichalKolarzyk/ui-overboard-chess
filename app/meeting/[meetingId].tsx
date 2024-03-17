import { useLocalSearchParams, useRouter } from "expo-router/src/hooks"
import { View, Text } from "react-native";
import Meeting from "../../components/meetingComponents";
import { MeetingEvent } from "../../components/meetingComponents/MeetingContext";

const MeetingPage = () => {
    const {meetingId} = useLocalSearchParams();
    const router = useRouter();

    const onMeetingEvent = (event: MeetingEvent) => {
        if(event == MeetingEvent.afterDelete){
            router.back();
        }
    }

    return <View>
        <Meeting.Main meetingId={meetingId.toString()} onEvent={onMeetingEvent}>
            <Meeting.Informations/>
            <Meeting.Join/>
            <Meeting.Delete/>
        </Meeting.Main>
    </View>
}

export default MeetingPage;