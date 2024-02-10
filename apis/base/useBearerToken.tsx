import { useEffect, useState } from "react"
import { useSecureStore } from "../../store/useSecureStore";

export const useBearerToken = () => 
{
    const [token, setToken] = useState("");

    const get = () => {
        return token;
    }

    const set = (newToken: string) => {
        setToken(newToken);
    }

    return {get, set}
}