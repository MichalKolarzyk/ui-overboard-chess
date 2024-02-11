import {  useRouter } from "expo-router";
import { View,  Button, StyleSheet } from "react-native"
import LinkButton from "../components/baseComponents/LinkButton";
import { useSession } from "../hooks/sessionHooks";


const Home = () => {
    const session = useSession();
    const router = useRouter();

    const login = async () => {
        await session.login({username: "string", password: "string"});
        router.replace('/');
    }

    return <View style={styles.container}>
        <LinkButton title="Find meetings" href="/"/>
        <LinkButton title="Create meeting" href="CreateMeetingPage"/>
        <Button  title='Login' onPress={login}/>        
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