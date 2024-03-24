import React, { useState } from "react";
import { useSession } from "../../hooks/sessionHooks";
import { useFormResult } from "../../hooks/useFormResult";

export class LoginWithEmailState{
    email: string;
    setEmail: (value: string) => void;
    sendEmail: () => Promise<void>;
    code: string;
    setCode: (value: string) => void;
    codeError? : string;
    confirm: (onSucceed? : () => void) => Promise<void>;
    canConfirm: boolean;
    isLoading: boolean;
}

export const LoginWithEmailContext = React.createContext<LoginWithEmailState>(new LoginWithEmailState())

export const useLoginWithEmailContext = () => React.useContext(LoginWithEmailContext);

export const LoginWithEmailProvider = () : LoginWithEmailState => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [code, _setCode] = useState("");

    const session = useSession();
    const formResult = useFormResult();

    const setCode = (value: string) => {
        _setCode(value);
        formResult.clearField("code");
    }

    const sendEmail = async () => {
        setIsLoading(true);
        await session.loginWithEmail(email)
            .finally(() => {
                setIsLoading(false)
            });
    }

    const confirm = async (onSucceed? : () => void) => {
        setIsLoading(true);
        await session.confirmEmail({email, code})
            .then(() => {
                setCode("");
                setEmail("");
                onSucceed();
            })
            .catch(e => {
                formResult.fromAxiosError(e)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return {
        email, 
        setEmail,
        code,
        setCode,
        codeError: formResult.findErrorMessage("code"),
        sendEmail,
        confirm,
        canConfirm: formResult.findErrorMessage("code") == null,
        isLoading
    } as LoginWithEmailState
}