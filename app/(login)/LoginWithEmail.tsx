import { View,  Button, StyleSheet } from "react-native"
import LoginWithEmailComponent from "../../components/loginWithEmailComponents";
import useAppNavigation, { AppLocation } from "../../hooks/useAppNavigation";

const LoginWithEmail = () => {
    const navigation = useAppNavigation();

    return <View style={styles.container}>
        <LoginWithEmailComponent.SendEmail afterSendEmail={() => navigation.push(AppLocation.confirmEmail)}/>
        <Button onPress={() => navigation.push(AppLocation.login)} title="Go to admin login options"/>
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