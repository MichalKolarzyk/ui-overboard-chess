import React, { useEffect, useState } from "react";
import { useOverboardChessApi } from "../../hooks/overboardApiHooks";
import { GetMeetingResponse } from "../../hooks/overboardApiHooks/models/MeetingsModels";

export class MeetingState{
    isLoading: boolean;
    meeting: GetMeetingResponse;
    joinMeeting: () => void;
    deleteMeeting: () => void;
}

export enum MeetingEvent {
    "afterDelete", 
    "afterJoin"
}

export const MeetingsContext = React.createContext<MeetingState>(new MeetingState())

export const useMeetingsContext = () => React.useContext(MeetingsContext);

export const MeetingsProvider = (meetingId: string, onEvent?: (event: MeetingEvent) => void) : MeetingState => {
    const [meeting, setMeeting] = useState<GetMeetingResponse>();
    const [isLoading, setIsLoading] = useState(false);
    
    const overboardChessApi = useOverboardChessApi();

    const joinMeeting = async () => {
        setIsLoading(true);
        await overboardChessApi.joinMeeting(meeting.id);
        await fetchMeeting();
        setIsLoading(false);
        onEvent(MeetingEvent.afterJoin);
    }

    const deleteMeeting = async () => {
        setIsLoading(true);
        await overboardChessApi.deleteMeeting(meeting.id);
        setIsLoading(false);
        setMeeting(null);
        onEvent(MeetingEvent.afterDelete);
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
        await overboardChessApi.getMeeting(meetingId)
            .then(response => setMeeting(response.data))
            .catch(() => setMeeting(null))
    }

    return{
        isLoading,
        meeting,
        joinMeeting, 
        deleteMeeting,
    }
}