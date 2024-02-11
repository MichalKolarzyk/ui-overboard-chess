import React, { useEffect, useState } from "react";
import { LoginRequest } from "./models/LoginRequest";
import { useApiClient } from "../apiClientHooks";
import { useSecureStore } from "../storeHooks/useSecureStore";

export class SessionState {
    isLogin: () => boolean
    login: (request: LoginRequest) => Promise<void>
    logout: () => void
    isLoading: boolean
    bearerToken: string
}

export const SessionContext = React.createContext<SessionState>(new SessionState())


export const SessionStateProvider = () : SessionState => {
    const [overboardApiToken, setOverboardApiToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const secureStore = useSecureStore();
    const tokenKey = "TOKEN_BEARER_KEY";

    const apiClient = useApiClient().getAxios({
        baseUrl: "https://http-overboard-chess-develop.azurewebsites.net",
        timeout: 10000,
    })

    useEffect(() => {
        const getTokenAsync = async () => {
            setIsLoading(true);
            const tokenFromStore = await secureStore.get(tokenKey);
            setOverboardApiToken(tokenFromStore);
            setIsLoading(false);
        }
        getTokenAsync();
    }, [])
    
    const login = async (request: LoginRequest) : Promise<void> => {
        setIsLoading(true);
        const token = await apiClient.post<string>("/api/user/login", request)
        setOverboardApiToken(token?.data);
        await secureStore.set(tokenKey, token?.data)
        setIsLoading(false);
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
        isLoading,
        bearerToken: overboardApiToken
    }
}