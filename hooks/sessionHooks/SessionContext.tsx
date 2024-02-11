import React, { useState } from "react";
import { LoginRequest } from "./models/LoginRequest";
import { useApiClient } from "../apiClientHooks";

export class SessionState {
    isLogin: () => boolean
    login: (request: LoginRequest) => Promise<void>
    logout: () => void
    bearerToken: string
}

export const SessionContext = React.createContext<SessionState>(new SessionState())


export const SessionStateProvider = () : SessionState => {
    const [overboardApiToken, setOverboardApiToken] = useState("");

    const apiClient = useApiClient().getAxios({
        baseUrl: "https://http-overboard-chess-develop.azurewebsites.net",
        timeout: 10000,
    })
    
    const login = async (request: LoginRequest) : Promise<void> => {
        const token = await apiClient.post<string>("/api/user/login", request)
        setOverboardApiToken(token?.data);
    }

    const logout = () => {
        setOverboardApiToken("");
    }

    const isLogin = () => {
        return overboardApiToken != null && overboardApiToken != undefined && overboardApiToken != ""
    }

    return{
        login,
        isLogin,
        logout,
        bearerToken: overboardApiToken
    }
}