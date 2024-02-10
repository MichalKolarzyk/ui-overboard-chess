import { Stack } from "expo-router/stack";
import { UserCredentialsContext, UserCredentialsProvider } from "../components/userCredentialsComponents";

export default function Layout() {
  return (
    <UserCredentialsContext.Provider value={UserCredentialsProvider()}>
      <Stack />
    </UserCredentialsContext.Provider>
  );
}
