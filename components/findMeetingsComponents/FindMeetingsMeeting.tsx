import { FindMeetingsResponse } from "../../apis/OverboardChessApis/models/FindMeetingsModels";
import {Text, View} from "react-native"

const FindMeetingsMeeting = (props: FindMeetingsMeetingProps) => {
    return (
        <View>
            <Text>{props?.meeting?.userOwnerName}</Text>
            <Text>{props?.meeting?.userOwnerId}</Text>
        </View>
    )
}

export class FindMeetingsMeetingProps{
    meeting: FindMeetingsResponse
}

export default FindMeetingsMeeting;