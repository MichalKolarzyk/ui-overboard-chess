import React, { useState } from "react";
import { useOverboardChessApi } from "../../hooks/overboardApiHooks";
import { useFormResult } from "../../hooks/useFormResult";

export class CreateMeetingState{
    title: string;
    setTitle: (value: string) => void;
    start: Date;
    setStart: (value: Date) => void;
    durationHours: number;
    setDurationHours: (value: number) => void;
    durationMinutes: number;
    setDurationMinutes: (value: number) => void;
    canCreate: boolean;
    create: () => void;
}

export const CreateMeetingContext = React.createContext<CreateMeetingState>(new CreateMeetingState());

export const useCreateMeetingContext = () => React.useContext(CreateMeetingContext);

export const CreateMeetingProvider = () : CreateMeetingState => {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState<Date>(new Date(Date.now()));
    const [durationHours, setDurationHours] = useState(2);
    const [durationMinutes, setDurationMinutes] = useState(30);
    
    const formResult = useFormResult();

    const overboardChessApi = useOverboardChessApi();

    const create = () => {
        overboardChessApi.createMeeting({
            durationHours: durationHours,
            durationMinutes: durationMinutes,
            start: start.toISOString(),
            title: title,
        })
    }

    return {
        title,
        setTitle,
        start,
        setStart,
        durationHours,
        setDurationHours,
        durationMinutes,
        setDurationMinutes,
        create,
        canCreate: formResult.isValid(),
    } as CreateMeetingState
}