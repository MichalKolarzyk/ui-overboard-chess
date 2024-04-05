import { Stack } from "expo-router/stack";
import LoginWithEmail from "../../components/loginWithEmailComponents";

export default function Layout() {
  return (
    <LoginWithEmail.Main>
      <Stack screenOptions={{ headerShown: false }} />
    </LoginWithEmail.Main>
  );
}
