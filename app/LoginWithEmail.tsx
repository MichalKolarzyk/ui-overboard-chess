import {  useRouter } from "expo-router";
import { View,  Button, StyleSheet } from "react-native"
import LoginWithEmailComponent from "../components/loginWithEmailComponents";

const LoginWithEmail = () => {
    const router = useRouter();

    return <View style={styles.container}>
        <LoginWithEmailComponent.SendEmail afterSendEmail={() => router.push("ConfirmEmail")}/>
        <Button onPress={() => router.replace("Login")} title="Go to admin login options"/>
    </View>
}

export default LoginWithEmail;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        gap: 20,
        marginHorizontal: 16,
    },
})