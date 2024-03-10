import { ActivityIndicator, View, Text, Button } from "react-native";
import { MeetingsContext, MeetingsProvider, useMeetingsContext } from "./MeetingContext";

const Main = (props: MeetingsProps) => {
    return <MeetingsContext.Provider value={MeetingsProvider(props.meetingId)}>
        {props.children}
    </MeetingsContext.Provider>
}

const Informations = () => {
    const context = useMeetingsContext();
    if(context.isLoading){
        return <ActivityIndicator size="large"/>
    }

    return <View>
        <Text>{context.meeting?.title ?? ""}</Text>
        <Text>{context.meeting?.description ?? ""}</Text>
        <Text>{context.meeting?.durationHours ?? 0}</Text>
        <Text>{context.meeting?.durationMinutes ?? 0}</Text>
    </View>
}

const Join = () => {
    const context = useMeetingsContext();
    return <Button onPress={context.joinMeeting} disabled={!context.meeting?.canJoin ?? false} title="Join"/>
}

const Delete = () => {
    const context = useMeetingsContext();
    return <Button onPress={context.deleteMeeting} disabled={!context.meeting?.canRemove ?? false} title="Remove"/>
}

const Meeting = {Main, Informations, Join, Delete}
export default Meeting

export interface MeetingsProps{
    meetingId: string,
    children?: any,
}