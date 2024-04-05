import { Stack } from "expo-router/stack";
import { SessionProvider } from "../hooks/sessionHooks";
import { DeviceProvider } from "../hooks/deviceHooks";

export default function Layout() {
  return (
    <DeviceProvider>
      <SessionProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SessionProvider>
    </DeviceProvider>
  );
}
