import React, { useEffect, useState } from "react";
import { FindMeetingsResponse } from "../../hooks/overboardApiHooks/models/FindMeetingsModels";
import { useOverboardChessApi } from "../../hooks/overboardApiHooks";

export class FindMeetingsState{
    meetings: Array<FindMeetingsResponse>
    isLoading: boolean
}

export const FindMeetingsContext = React.createContext<FindMeetingsState>(new FindMeetingsState())

export const useFindMeetingsContext = () => React.useContext(FindMeetingsContext);

export const FindMeetingsProvider = () : FindMeetingsState => {
    const [isLoading, setIsLoading] = useState(false);
    const [meetings, setMeetings] = useState<Array<FindMeetingsResponse>>([]);

    const overboardApi = useOverboardChessApi()

    useEffect(() => {
        const fetchMeetings = async () => {
            setIsLoading(true);
            const meetingsResponse = await overboardApi.findMeetings();
            setMeetings(meetingsResponse.data)
            setIsLoading(false);
        }

        fetchMeetings();
    }, [])


    return {isLoading, meetings}
}