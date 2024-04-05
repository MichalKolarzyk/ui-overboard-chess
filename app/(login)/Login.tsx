import { View,  Button, StyleSheet } from "react-native"
import { LoginRequest } from "../../hooks/sessionHooks/models/LoginRequest";
import useAppNavigation, { AppLocation } from "../../hooks/useAppNavigation";
import { useSession } from "../../hooks/sessionHooks";


const Home = () => {
    const session = useSession();
    const navigation = useAppNavigation();

    const login = async (request: LoginRequest) => {
        await session.login(request);
        navigation.replace(AppLocation.home);
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