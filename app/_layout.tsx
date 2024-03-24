import { Stack } from "expo-router/stack";
import { SessionProvider } from "../hooks/sessionHooks";
import LoginWithEmail from "../components/loginWithEmailComponents";


export default function Layout() {
  return (
    <SessionProvider>
      <LoginWithEmail.Main>
        <Stack screenOptions={{headerShown: false}}/>
      </LoginWithEmail.Main>
    </SessionProvider>
  );
}
