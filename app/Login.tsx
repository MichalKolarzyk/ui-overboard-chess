import {  useRouter } from "expo-router";
import { View,  Button, StyleSheet } from "react-native"
import LinkButton from "../components/baseComponents/LinkButton";
import { useSession } from "../hooks/sessionHooks";
import { LoginRequest } from "../hooks/sessionHooks/models/LoginRequest";


const Home = () => {
    const session = useSession();
    const router = useRouter();

    const login = async (request: LoginRequest) => {
        await session.login(request);
        router.replace('');
    }

    return <View style={styles.container}>
        <Button disabled={session.isLoading} title='Login string' onPress={() => login({username: "string", password: "string"})}/>
        <Button disabled={session.isLoading} title='Login Michal' onPress={() => login({username: "Michal", password: "Michal"})}/>
    </View>
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        gap: 20,
        marginHorizontal: 16,
    },
})