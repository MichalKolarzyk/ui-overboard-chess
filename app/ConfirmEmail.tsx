import {  useRouter } from "expo-router";
import { View,  Button, StyleSheet } from "react-native"
import { useSession } from "../hooks/sessionHooks";
import LoginWithEmail from "../components/loginWithEmailComponents";



const ConfirmEmail = () => {
    const router = useRouter();

    return <View style={styles.container}>
        <LoginWithEmail.ConfirmEmail afterConfirmEmail={() => router.replace("")} />
    </View>
}

export default ConfirmEmail;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        gap: 20,
        marginHorizontal: 16,
    },
})