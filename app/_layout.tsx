import { Stack } from "expo-router/stack";
import { View, StyleSheet } from "react-native";
import ConsoleLogComponent from "../components/testComponents/ConsoleLogComponent";

export default function Layout() {
  return (
    <ConsoleLogComponent>
      <Stack />
    </ConsoleLogComponent>
  );
}