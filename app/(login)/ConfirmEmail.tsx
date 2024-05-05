import { View, StyleSheet } from "react-native"
import LoginWithEmail from "../../components/loginWithEmailComponents";
import useAppNavigation, { AppLocation } from "../../hooks/useAppNavigation";



const ConfirmEmail = () => {
    const navigation = useAppNavigation();

    return <View style={styles.container}>
        <LoginWithEmail.ConfirmEmail afterConfirmEmail={() => navigation.replace(AppLocation.home)} />
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