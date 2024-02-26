import { FindMeetingsContext, FindMeetingsProvider, useFindMeetingsContext } from "./FindMeetingsContext"
import {ActivityIndicator, Text, View} from "react-native"
import FindMeetingsMeeting from "./FindMeetingsMeeting"
import { router } from "expo-router"

const Main = (props: FindMeetingsProps) => {
    return <FindMeetingsContext.Provider value={FindMeetingsProvider(props.maxItems ?? 5)}>
        {props.children}
    </FindMeetingsContext.Provider>
}

const Meetings = (props: MeetingsProps) => {
    const context = useFindMeetingsContext();
    if(context.isLoading){
        return <ActivityIndicator size="large"/>
    }

    const meetingsComponent = context.meetings?.map?.(m => <FindMeetingsMeeting onPress={() => props.onPress(m.meetingId)} key={m.meetingId} meeting={m}/>)
    return <View>
        {meetingsComponent}
    </View>
}

const FindMeetings = {Main, Meetings}
export default FindMeetings

export interface FindMeetingsProps{
    maxItems?: number,
    children?: any,
}

export interface MeetingsProps{
    onPress: (meetingId: string) => void;
}