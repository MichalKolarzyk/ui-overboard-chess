import React, { useEffect, useState } from "react";
import { LoginRequest } from "./models/LoginRequest";
import { useApiClient } from "../apiClientHooks";
import { useSecureStore } from "../storeHooks/useSecureStore";
import { LoginWithEmailRequest as ConfirmEmailRequest } from "./models/LoginWithEmailRequest";

export class SessionState {
    isLogin: () => boolean
    login: (request: LoginRequest) => Promise<void>
    loginWithEmail: (email: string) => Promise<void>
    confirmEmail: (request: ConfirmEmailRequest) => Promise<void>
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

    const loginWithEmail = async (email: string) : Promise<void> => {
        setIsLoading(true);
        await apiClient.post("/api/user/loginWithEmail", {email});
        setIsLoading(false);
    }
    
    const confirmEmail = async (request: ConfirmEmailRequest) : Promise<void> => {
        setIsLoading(true);
        const token = await apiClient.post<string>("/api/user/confirmEmail", request)
        console.log(token);
        setOverboardApiToken(token?.data);
        await secureStore.set(tokenKey, token?.data)
        setIsLoading(false);
    }

    const logout = async () => {
        setIsLoading(true);
        setOverboardApiToken("");
        await secureStore.set(tokenKey, "")
            .finally(() => setIsLoading(false))
    }

    const isLogin = () => {
        return overboardApiToken != null && overboardApiToken != undefined && overboardApiToken != ""
    }

    return{
        login,
        loginWithEmail,
        confirmEmail,
        isLogin,
        logout,
        isLoading,
        bearerToken: overboardApiToken
    }
}