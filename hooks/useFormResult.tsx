import { useState } from "react";

export const useFormResult = () => {
    const [errors, setErrors] = useState<Array<FormError>>([]);


    const isValid = () : boolean => {
        return errors.length === 0;
    }

    const addError = (error: FormError) => {
        setErrors(prevState => {
            return [...prevState, error];
        })
    }

    const clear = () => {
        setErrors([]);
    }

    const findErrorMessage = (field: string) : string | null => {
        return errors.find(e => e.field === field)?.message;
    }

    return {
        isValid,
        addError,
        clear,
        findErrorMessage
    }
}

export class FormError{
    message: string;
    field: string;
}