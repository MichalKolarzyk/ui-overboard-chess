import { FindMeetingsContext, FindMeetingsProvider, FindMeetingsState, useFindMeetingsContext } from "./FindMeetingsContext"
import {Text} from "react-native"

const Main = (props: any) => {
    return <FindMeetingsContext.Provider value={FindMeetingsProvider()}>
        {props.children}
    </FindMeetingsContext.Provider>
}

const Meetings = () => {
    const context = useFindMeetingsContext();
    return context.meetings?.map?.(m => <Text>{m.userOwnerName}</Text>)
}

const FindMeetings = {Main, Meetings}
export default FindMeetings