import { useRouter } from "expo-router/src/hooks";

const useAppNavigation = () => {
    const router = useRouter();

    const push = (location: AppLocation) => {
        router.push(location.path);
    }

    const replace = (location: AppLocation) => {
        router.replace(location.path);
    }

    const back = () => router.back;

    return {
        push,
        replace,
        back,
    }
}

export class AppLocation{
    path: string;

    constructor(path: string){
        this.path = path;
    }

    toString = () => this.path;

    static meeting = (meetingId : string) => new AppLocation(`meeting/${meetingId}`);
    static home = new AppLocation("");
    
    static login = new AppLocation("Login");
    static loginWithEmail = new AppLocation("LoginWithEmail");
    static confirmEmail = new AppLocation("ConfirmEmail");
}

export default useAppNavigation;