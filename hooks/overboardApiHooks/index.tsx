import { AxiosResponse } from "axios";
import { useApiClient } from "../apiClientHooks";
import { useSession } from "../sessionHooks";
import { FindMeetingsResponse } from "./models/FindMeetingsModels";
import { UserOwnerMeetingResponse } from "./models/UserOwnerMeetingsModels";


export const useOverboardChessApi = () =>{
    const session = useSession();
    const apiClient = useApiClient().getAxios({
        baseUrl: "https://http-overboard-chess-develop.azurewebsites.net",
        bearerToken: session.bearerToken,
        timeout: 10000,
    })
    
    const findMeetings = async () : Promise<AxiosResponse<FindMeetingsResponse[], any>> => {
        return await apiClient.get<Array<FindMeetingsResponse>>("/api/Meeting/FindMeetings");
    }

    const getUserOwnerMeetings = async () : Promise<AxiosResponse<UserOwnerMeetingResponse[], any>> => {
        return await apiClient.get<Array<UserOwnerMeetingResponse>>("/api/Meeting/UserOwnerMeetings");
    }

    return {findMeetings, getUserOwnerMeetings}
}