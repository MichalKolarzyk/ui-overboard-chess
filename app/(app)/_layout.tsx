import { Stack } from "expo-router/stack";
import { Redirect } from "expo-router";
import { useSession } from "../../hooks/sessionHooks";

export default function Layout() {
  const session = useSession();

  if(!session.isLogin()){
    return <Redirect href={"/Login"}/>
  }

  return <Stack />;
}
