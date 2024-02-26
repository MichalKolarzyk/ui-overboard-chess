import React, { useEffect, useState } from "react";
import { useOverboardChessApi } from "../../hooks/overboardApiHooks";
import { GetMeetingResponse } from "../../hooks/overboardApiHooks/models/MeetingsModels";

export class MeetingState{
    isLoading: boolean;
    meeting: GetMeetingResponse;
}

export const MeetingsContext = React.createContext<MeetingState>(new MeetingState())

export const useMeetingsContext = () => React.useContext(MeetingsContext);

export const MeetingsProvider = (meetingId: string) : MeetingState => {
    const [meeting, setMeeting] = useState<GetMeetingResponse>();
    const [isLoading, setIsLoading] = useState(false);
    
    const overboardChessApi = useOverboardChessApi();

    useEffect(() => {
        const fetchMeeting = async () => {
            setIsLoading(true);
            const meetingResponse = await overboardChessApi.getMeeting(meetingId);
            setMeeting(meetingResponse.data);
            setIsLoading(false);
        }
        fetchMeeting();
    },[])

    return{
        isLoading,
        meeting,
    }
}