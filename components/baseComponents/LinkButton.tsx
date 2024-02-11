import { Link, useRouter } from "expo-router";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

const LinkButton = (props: LinkButtonProps) => {
  const router = useRouter();

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        styles.pressableContainer,
      ]}
      onPress={() => router.push(props.href)}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

export default LinkButton;

export interface LinkButtonProps {
  href: string;
  title?: string;
}

const styles = StyleSheet.create({
  pressableContainer: {
    justifyContent: 'center',
    flexDirection: "row",
    borderRadius: 8,
    padding: 15,
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
});
