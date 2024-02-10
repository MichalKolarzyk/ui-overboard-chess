import { useApiClient } from "../base/useApiClient"
import { useBearerToken } from "../base/useBearerToken"
import { FindMeetingsResponse } from "./models/FindMeetingsModels";
import { LoginRequest } from "./models/LoginRequest";

export const useOverboardChessApi = () =>{
    const bearerToken = useBearerToken();
    const apiClient = useApiClient().getAxios({
        baseUrl: "https://http-overboard-chess-develop.azurewebsites.net",
        bearerToken: bearerToken.get(),
        timeout: 10000,
    })
    
    const login = async (request: LoginRequest) : Promise<void> => {
        const token = await apiClient
            .post<string>("/api/user/login", request)
        bearerToken.set(token?.data);
    }

    const findMeetings = async () : Promise<Array<FindMeetingsResponse>> => {
        return await apiClient.get("/api/Meeting/FindMeetings");
    }

    return {login, findMeetings}
}