import React, { useEffect, useState } from "react";
import { FindMeetingsResponse } from "../../apis/OverboardChessApis/models/FindMeetingsModels";
import { useOverboardChessApi } from "../../apis/OverboardChessApis/useOverboardChessApi";

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
            const newMeetings = await overboardApi.findMeetings();
            setMeetings(newMeetings.data)
            setIsLoading(false);
        }

        fetchMeetings();
    }, [])


    return {isLoading, meetings}
}