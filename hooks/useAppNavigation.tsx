import { useRouter } from "expo-router/src/hooks";

const useAppNavigation = () => {
    const router = useRouter();

    
    const push = (location: AppLocation) => {
        router.push(location.path);
    }

    const replace = (location: AppLocation) => {
        router.replace(location.path);
    }

    return {
        push,
        replace
    }
}

export class AppLocation{
    path: string;

    constructor(path: string){
        this.path = path;
    }

    toString = () => this.path;

    static meeting = (meetingId : string) => new AppLocation(`meeting/${meetingId}`);
    static confirmEmail = new AppLocation("ConfirmEmail");
    static login = new AppLocation("Login");
    static home = new AppLocation("");
    static loginWithEmail = new AppLocation("LoginWithEmail");
}

export default useAppNavigation;