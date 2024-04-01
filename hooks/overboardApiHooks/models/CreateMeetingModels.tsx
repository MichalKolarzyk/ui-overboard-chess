import { Double } from "react-native/Libraries/Types/CodegenTypes"

export interface CreateMeetingRequest{
    title: string,
    start: string,
    durationHours: number,
    durationMinutes: number,
    latitude: Double,
    longitude: Double
}