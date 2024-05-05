import { TextInput, View, StyleSheet } from "react-native";

export const TextControll = (props: TextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput editable={props.editable} style={styles.text} value={props.value} onChangeText={props.setValue} />
    </View>
  );
};

export interface TextInputProps {
  editable?: boolean;
  value: string;
  setValue: (newValue: string) => void;
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
  },
  layout: {
    flexDirection: "row",
  },
  text: {
    flexGrow: 1,
    fontSize: 20,
  },
});
