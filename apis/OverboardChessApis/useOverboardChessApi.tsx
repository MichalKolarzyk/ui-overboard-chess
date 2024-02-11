import { AxiosResponse } from "axios";
import { useUserCredentials } from "../../components/userCredentialsComponents";
import { useApiClient } from "../base/useApiClient"
import { useBearerToken } from "../base/useBearerToken"
import { FindMeetingsResponse } from "./models/FindMeetingsModels";
import { LoginRequest } from "./models/LoginRequest";

export const useOverboardChessApi = () =>{
    const userCredentials = useUserCredentials();
    const apiClient = useApiClient().getAxios({
        baseUrl: "https://http-overboard-chess-develop.azurewebsites.net",
        bearerToken: userCredentials.overboardApiToken,
        timeout: 10000,
    })
    
    const login = async (request: LoginRequest) : Promise<void> => {
        const token = await apiClient
            .post<string>("/api/user/login", request)
            userCredentials.setOverboardApiToken(token?.data);
    }

    const findMeetings = async () : Promise<AxiosResponse<FindMeetingsResponse[], any>> => {
        return await apiClient.get<Array<FindMeetingsResponse>>("/api/Meeting/FindMeetings");
    }

    return {login, findMeetings}
}