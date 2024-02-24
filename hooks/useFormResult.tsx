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

    return {
        isValid,
        addError,
        clear,
    }
}

export class FormError{
    message: string;
    field: string;
}