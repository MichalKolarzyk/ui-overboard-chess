import React, { useEffect, useState } from "react";
import { FindMeetingsResponse } from "../../hooks/overboardApiHooks/models/MeetingsModels";
import { useOverboardChessApi } from "../../hooks/overboardApiHooks";
import { UserOwnerMeetingResponse } from "../../hooks/overboardApiHooks/models/UserOwnerMeetingsModels";

export class UserOwnerMeetingsState{
    meetings: Array<FindMeetingsResponse>
    isLoading: boolean
}

export const UserOwnerMeetingsContext = React.createContext<UserOwnerMeetingsState>(new UserOwnerMeetingsState())

export const useUserOwnerMeetingsContext = () => React.useContext(UserOwnerMeetingsContext);

export const UserOwnerMeetingsProvider = () : UserOwnerMeetingsState => {
    const [isLoading, setIsLoading] = useState(false);
    const [meetings, setMeetings] = useState<Array<UserOwnerMeetingResponse>>([]);

    const overboardApi = useOverboardChessApi()

    useEffect(() => {
        const fetchMeetings = async () => {
            setIsLoading(true);
            const meetingsResponse = await overboardApi.getUserOwnerMeetings();
            setMeetings(meetingsResponse.data)
            setIsLoading(false);
        }

        fetchMeetings();
    }, [])


    return {isLoading, meetings}
}