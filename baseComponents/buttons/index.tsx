import { Pressable, StyleSheet, Text } from "react-native";

export const ButtonOv = (props: ButtonOvProps) => {
  const {
    variant = "primary"
  } = props

  const style = styles[variant]
  const pressdStyle = styles[`${variant}-pressed`] ?? styles[`default-pressed`]
  const textStyle = styles[`${variant}-text`] ?? styles['default-text']

  return (
    <Pressable
      style={state => [
        style,
        state.pressed ? pressdStyle : null,
        styles.container,
      ]}
      onPress={props.onPress}
    >
      <Text style={textStyle}>{props.title}</Text>
    </Pressable>
  );
};

export interface ButtonOvProps {
  onPress?: () => void;
  title?: string,
  variant?: "primary" | "secondary" | "outline-primary" | "outline-secondary";
}

const colors = {
  primary: "#23e04c",
  secondary: "#7a6f6f",
  lightText: "#ffffff",
  darkText: "#000000",
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "column",
    borderRadius: 3,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  "primary-text": {
    color: colors.lightText,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "600",
  },
  "outline-primary":{
    backgroundColor: "transparent",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  "outline-primary-text":{
    color: colors.primary,
    textTransform: "uppercase",
    textAlign: "center",
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: colors.lightText,
  },
  "outline-secondary":{
    backgroundColor: "transparent",
    borderColor: colors.secondary,
    borderWidth: 1,
  },
  "outline-secondary-text":{
    color: colors.secondary,
    textAlign: "center",
  },
  "default-pressed": {
    opacity: .8,
  },
  "default-text": {
    color: colors.lightText,
    textAlign: "center",
  }
});

