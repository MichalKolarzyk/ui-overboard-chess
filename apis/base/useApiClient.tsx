import axios, { AxiosInstance } from "axios"

export const useApiClient = () => {
    const getAxios = (props: AxiosProps) : AxiosInstance => {
        const config = {
            baseURL: props.baseUrl,
            timeout: props.timeout,
            headers: {'Authorization': `Bearer ${props.bearerToken}`}
        }
        return axios.create(config)
    }

    return {getAxios}
}

export interface AxiosProps{
    baseUrl: string,
    timeout: number,
    bearerToken: string,
}
