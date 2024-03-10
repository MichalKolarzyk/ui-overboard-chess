import React, { useEffect, useState } from "react";
import { useOverboardChessApi } from "../../hooks/overboardApiHooks";
import { GetMeetingResponse } from "../../hooks/overboardApiHooks/models/MeetingsModels";

export class MeetingState{
    isLoading: boolean;
    meeting: GetMeetingResponse;
    joinMeeting: () => void;
    deleteMeeting: () => void;
}

export const MeetingsContext = React.createContext<MeetingState>(new MeetingState())

export const useMeetingsContext = () => React.useContext(MeetingsContext);

export const MeetingsProvider = (meetingId: string) : MeetingState => {
    const [meeting, setMeeting] = useState<GetMeetingResponse>();
    const [isLoading, setIsLoading] = useState(false);
    
    const overboardChessApi = useOverboardChessApi();

    const joinMeeting = async () => {
        setIsLoading(true);
        await overboardChessApi.joinMeeting(meeting.id);
        await fetchMeeting();
        setIsLoading(false);
    }

    const deleteMeeting = async () => {
        setIsLoading(true);
        await overboardChessApi.deleteMeeting(meeting.id);
        setIsLoading(false);
    }

    useEffect(() => {
        const featchMeetingEffect = async () => {
            setIsLoading(true);
            await fetchMeeting();
            setIsLoading(false);
        }

        featchMeetingEffect();
    },[])

    const fetchMeeting = async () => {
        const meetingResponse = await overboardChessApi.getMeeting(meetingId)
        setMeeting(meetingResponse.data);
    }

    return{
        isLoading,
        meeting,
        joinMeeting, 
        deleteMeeting,
    }
}