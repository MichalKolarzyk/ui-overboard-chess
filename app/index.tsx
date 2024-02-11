import { Link } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native"
import { useOverboardChessApi } from "../apis/OverboardChessApis/useOverboardChessApi";
import LinkButton from "../components/baseComponents/LinkButton";


const Home = () => {
    const overboardApi = useOverboardChessApi();

    return <View style={styles.container}>
        <LinkButton title="Find meetings" href="FindMeetingsPage"/>
        <LinkButton title="Create meeting" href="CreateMeetingPage"/>
        <Button  title='Login' onPress={() => overboardApi.login({username: "string", password: "string"})}/>        
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