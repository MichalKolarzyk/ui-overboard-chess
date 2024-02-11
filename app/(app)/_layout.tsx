import { Stack } from "expo-router/stack";
import { Redirect } from "expo-router";
import { useSession } from "../../hooks/sessionHooks";
import { ActivityIndicator } from "react-native";

export default function Layout() {
  const session = useSession();

  if(session.isLoading)
    return <ActivityIndicator/>

  if(!session.isLogin()){
    return <Redirect href={"/Login"}/>
  }

  return <Stack />;
}
