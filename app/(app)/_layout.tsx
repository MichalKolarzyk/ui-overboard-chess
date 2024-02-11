import { Redirect, Tabs } from "expo-router";
import { useSession } from "../../hooks/sessionHooks";
import { ActivityIndicator } from "react-native";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  const session = useSession();

  if (session.isLoading) return <ActivityIndicator />;

  if (!session.isLogin()) {
    return <Redirect href={"/Login"} />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused, color, size }) => <AntDesign name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="CreateMeetingPage"
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
