import { Link } from "expo-router";
import { View, Text, Pressable, Button } from "react-native"
import { useOverboardChessApi } from "../apis/OverboardChessApis/useOverboardChessApi";

const Home = () => {
    const overboardChessApi = useOverboardChessApi();

    return <View>
        <Text>Login page</Text>
        <Link href="/Dashboard">Dashboard</Link>
        <Link href="/FindMeetingsPage">FindMeetingsPage</Link>
        <Button  title='Login' onPress={async () => await overboardChessApi.login({username: "string", password: "string"})}/>        
    </View>
}

export default Home;