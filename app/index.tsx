import { Link } from "expo-router";
import { View, Text, Button } from "react-native"
import { useOverboardChessApi } from "../apis/OverboardChessApis/useOverboardChessApi";

const Home = () => {
    const overboardApi = useOverboardChessApi();

    return <View>
        <Text>Login page</Text>
        <Link href="/Dashboard">Dashboard</Link>
        <Link href="/FindMeetingsPage">FindMeetingsPage</Link>
        <Button  title='Login' onPress={() => overboardApi.login({username: "string", password: "string"})}/>        
    </View>
}

export default Home;