import { FindMeetingsContext, FindMeetingsProvider, useFindMeetingsContext } from "./FindMeetingsContext"
import {ActivityIndicator, Text} from "react-native"
import FindMeetingsMeeting from "./FindMeetingsMeeting"

const Main = (props: any) => {
    return <FindMeetingsContext.Provider value={FindMeetingsProvider()}>
        {props.children}
    </FindMeetingsContext.Provider>
}

const Meetings = () => {
    const context = useFindMeetingsContext();
    if(context.isLoading){
        return <ActivityIndicator size="large"/>
    }
    return context.meetings?.map?.(m => <FindMeetingsMeeting key={m.meetingId} meeting={m}/>)
}

const FindMeetings = {Main, Meetings}
export default FindMeetings