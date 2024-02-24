import { AxiosResponse } from "axios";
import { useApiClient } from "../apiClientHooks";
import { useSession } from "../sessionHooks";
import { FindMeetingsResponse } from "./models/FindMeetingsModels";
import { UserOwnerMeetingResponse } from "./models/UserOwnerMeetingsModels";
import { CreateMeetingRequest } from "./models/CreateMeetingModels";


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

    const createMeeting = async (request: CreateMeetingRequest) : Promise<AxiosResponse> => {
        return await apiClient.post("/api/Meeting", request)
    }

    return {findMeetings, getUserOwnerMeetings, createMeeting}
}