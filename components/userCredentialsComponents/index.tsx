import React, { useState } from "react";

export class UserCredentialsState {
    overboardApiToken: string;
    setOverboardApiToken: (token: string) => void
    isLoginToOverboardApi: () => boolean
}

export const UserCredentialsContext = React.createContext<UserCredentialsState>(new UserCredentialsState())


export const UserCredentialsProvider = () : UserCredentialsState => {
    const [overboardApiToken, setOverboardApiToken] = useState("");

    const isLoginToOverboardApi = () => {
        return overboardApiToken != null && overboardApiToken != undefined && overboardApiToken != ""
    }

    return{
        overboardApiToken,
        setOverboardApiToken,
        isLoginToOverboardApi
    }
}

export const useUserCredentials = () => React.useContext(UserCredentialsContext)