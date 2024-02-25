import React, { useEffect, useState } from "react";
import { useOverboardChessApi } from "../../hooks/overboardApiHooks";
import { useFormResult } from "../../hooks/useFormResult";

export class CreateMeetingState{
    isLoading: boolean;
    title: string;
    setTitle: (value: string) => void;
    titleError: string | null;
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
    const [isLoading, setIsLoading] = useState(false);
    const [durationHours, setDurationHours] = useState(2);
    const [durationMinutes, setDurationMinutes] = useState(30);    
    
    const formResult = useFormResult();
    const overboardChessApi = useOverboardChessApi();

    useEffect(() => {
        formResult.clear();
        if(title === null || title.length === 0){
            formResult.addError({
                field: "title",
                message: "title cannot be empty",
            })
        }
    }, [title, start, durationHours, durationMinutes])

    const create = async () => {
        setIsLoading(true);
        await overboardChessApi.createMeeting({
            durationHours: durationHours,
            durationMinutes: durationMinutes,
            start: start.toISOString(),
            title: title,
        })
        setIsLoading(false);
    }

    return {
        isLoading,
        title,
        setTitle,
        titleError: formResult.findErrorMessage("title"),
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