import { FindMeetingsContext, FindMeetingsProvider, useFindMeetingsContext } from "./FindMeetingsContext"
import {ActivityIndicator, Text, View} from "react-native"
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

    const meetingsComponent = context.meetings?.map?.(m => <FindMeetingsMeeting key={m.meetingId} meeting={m}/>)
    return <View>
        <Text style={{paddingHorizontal: 16}}>Find meetings</Text>
        {meetingsComponent}
    </View>
}

const FindMeetings = {Main, Meetings}
export default FindMeetings