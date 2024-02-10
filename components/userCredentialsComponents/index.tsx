import React, { useState } from "react";

export class UserCredentialsState {
    bearerToken: string;
    setBearerToken: (token: string) => void
}

export const UserCredentialsContext = React.createContext<UserCredentialsState>(new UserCredentialsState())


export const UserCredentialsProvider = () : UserCredentialsState => {
    const [bearerToken, setBearerToken] = useState("");
    return{
        bearerToken,
        setBearerToken,
    }
}

export const useUserCredentials = () => React.useContext(UserCredentialsContext)