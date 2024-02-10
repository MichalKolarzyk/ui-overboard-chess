import { Button, View, Text } from "react-native";
import { useOverboardChessApi } from "../apis/OverboardChessApis/useOverboardChessApi";
import { useState } from "react";
import { FindMeetingsResponse } from "../apis/OverboardChessApis/models/FindMeetingsModels";

const FindMeetingsPage = () => {
    const [meetings, setMeetings] = useState<Array<FindMeetingsResponse>>([])
    const apiOverboardChess = useOverboardChessApi();
    
    const findMeetings = async () => {
        var newMeetings = await apiOverboardChess.findMeetings()
        setMeetings(newMeetings);
    }

    const meetingsComponent = meetings.map(m => <Text>{m.userOwnerName}</Text>) 

    return <View>
        {meetingsComponent}
        <Button onPress={findMeetings} title="Get meetings"/>
    </View>
}

export default FindMeetingsPage;