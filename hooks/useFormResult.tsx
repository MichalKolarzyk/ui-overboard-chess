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

    const clearField = (field: string) => {
        setErrors(prevState => {
            const newErrors = prevState.filter(e => e.field !== field)
            return [...newErrors];
        })
    }

    const findErrorMessage = (field: string) : string | null => {
        return errors.find(e => e.field === field)?.message;
    }

    return {
        isValid,
        addError,
        clear,
        clearField,
        findErrorMessage
    }
}

export class FormError{
    message: string;
    field: string;
}