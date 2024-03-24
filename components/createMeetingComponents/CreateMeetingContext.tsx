import React, { useState } from "react";
import { useOverboardChessApi } from "../../hooks/overboardApiHooks";
import { useFormResult } from "../../hooks/useFormResult";

export class CreateMeetingState{
    isLoading: boolean;
    title: string;
    setTitle: (value: string) => void;
    titleError: string | null;
    start: Date;
    setStart: (value: Date) => void;
    startError: string | null;
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
    const [title, _setTitle] = useState("");
    const [start, _setStart] = useState<Date>(new Date(Date.now()));
    const [isLoading, setIsLoading] = useState(false);
    const [durationHours, setDurationHours] = useState(2);
    const [durationMinutes, setDurationMinutes] = useState(30);    
    
    const formResult = useFormResult();
    const overboardChessApi = useOverboardChessApi();

    const setTitle = (value: string) => {
        _setTitle(value);
        formResult.clearField("title");
    }

    const setStart = (value: Date) => {
        _setStart(value)
        formResult.clearField("start")
    }

    const create = async () => {
        setIsLoading(true);
        await overboardChessApi.createMeeting({
            durationHours: durationHours,
            durationMinutes: durationMinutes,
            start: start.toISOString(),
            title: title,
        })
        .catch(e => formResult.fromAxiosError(e))
        setIsLoading(false);
    }

    return {
        isLoading,
        title,
        setTitle,
        titleError: formResult.findErrorMessage("title"),
        start,
        setStart,
        startError: formResult.findErrorMessage("start"),
        durationHours,
        setDurationHours,
        durationMinutes,
        setDurationMinutes,
        create,
        canCreate: formResult.isValid(),
    } as CreateMeetingState
}