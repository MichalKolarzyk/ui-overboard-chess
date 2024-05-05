import React, { useContext, useState } from "react";

export class FormOvValue{
    validated: boolean;
    onSubmit: () => void = () => {};
}

const FormOvContextInternal = React.createContext(new FormOvValue())

const FormOvProvider = () : FormOvValue => {
    const [validated, setVaidated] = useState(false);
    const [validations, setValidations] = useState<Array<Validation>>([]);

    const onSubmit = () => {
        validations.map(v => v.validation());
    }

    const addValidation = (key: string, vaidation: () => boolean) => {
        setValidations(prevState => {
            return [...prevState, new Validation(key, vaidation)]
        })
    }

    return {
        validated,
        onSubmit,
    }
}

class Validation {
    controlId: string;
    validation: () => boolean;

    constructor(controlId: string, validation: () => boolean){
        this.controlId = controlId;
        this.validation = validation;
    }
}

export const useFormOvContext = useContext(FormOvContextInternal);

export const FormOvContext = (props: any) => {
    return <FormOvContextInternal.Provider value={FormOvProvider()}>
        {props.children}
    </FormOvContextInternal.Provider>
}