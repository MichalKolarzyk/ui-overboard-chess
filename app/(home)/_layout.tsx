import { Redirect, Tabs } from "expo-router";
import { ActivityIndicator } from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { useSession } from "../../hooks/sessionHooks";
import { AppLocation } from "../../hooks/useAppNavigation";

export default function Layout() {
  const session = useSession();

  if (session.isLoading) return <ActivityIndicator />;

  if (!session.isLogin()) {
    return <Redirect href={AppLocation.loginWithEmail.toString()} />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => <AntDesign name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="AddMeetingPage"
        options={{
          title: "Add meeting",
          tabBarIcon: ({ focused, color, size }) => <MaterialIcons name="add-location-alt" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="SettingsPage"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color, size }) => <Feather name="settings" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
