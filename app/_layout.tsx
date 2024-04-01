import { Stack } from "expo-router/stack";
import { SessionProvider } from "../hooks/sessionHooks";
import LoginWithEmail from "../components/loginWithEmailComponents";
import { DeviceProvider } from "../hooks/deviceHooks";

export default function Layout() {
  return (
    <DeviceProvider>
      <SessionProvider>
        <LoginWithEmail.Main>
          <Stack screenOptions={{ headerShown: false }} />
        </LoginWithEmail.Main>
      </SessionProvider>
    </DeviceProvider>
  );
}
