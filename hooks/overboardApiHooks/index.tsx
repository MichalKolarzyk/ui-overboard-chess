import { AxiosResponse } from "axios";
import { useApiClient } from "../apiClientHooks";
import { useSession } from "../sessionHooks";
import { FindMeetingsResponse, GetMeetingResponse } from "./models/MeetingsModels";
import { UserOwnerMeetingResponse } from "./models/UserOwnerMeetingsModels";
import { CreateMeetingRequest } from "./models/CreateMeetingModels";


export const useOverboardChessApi = () =>{
    const session = useSession();
    const apiClient = useApiClient().getAxios({
        baseUrl: "https://http-overboard-chess-develop.azurewebsites.net",
        bearerToken: session.bearerToken,
        timeout: 10000,
    })
    
    const findMeetings = async (skip: number = 0, take: number = 5) : Promise<AxiosResponse<FindMeetingsResponse[], any>> => {
        return await apiClient.get<Array<FindMeetingsResponse>>(`/api/Meeting/FindMeetings?skip=${skip}&take=${take}`);
    }

    const getMeeting = async (meetingId: string) : Promise<AxiosResponse<GetMeetingResponse>> => {
        return await apiClient.get<GetMeetingResponse>(`/api/Meeting/${meetingId}`);
    }

    const getUserOwnerMeetings = async () : Promise<AxiosResponse<UserOwnerMeetingResponse[], any>> => {
        return await apiClient.get<Array<UserOwnerMeetingResponse>>("/api/Meeting/UserOwnerMeetings");
    }

    const createMeeting = async (request: CreateMeetingRequest) : Promise<AxiosResponse> => {
        return await apiClient.post("/api/Meeting", request)
    }

    const joinMeeting = async(meetingId: string) : Promise<AxiosResponse> => {
        return await apiClient.post(`/api/Meeting/${meetingId}/join`);
    }

    const deleteMeeting = async(meetingId: string) : Promise<AxiosResponse> => {
        return await apiClient.delete(`/api/Meeting/${meetingId}/delete`);
    } 

    return {
        findMeetings, 
        getMeeting, 
        getUserOwnerMeetings, 
        createMeeting,
        joinMeeting,
        deleteMeeting
    }
}