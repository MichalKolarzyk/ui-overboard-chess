import { Stack } from "expo-router/stack";
import { SessionProvider } from "../hooks/sessionHooks";

export default function Layout() {
  return (
    <SessionProvider>
      <Stack />
    </SessionProvider>
  );
}
