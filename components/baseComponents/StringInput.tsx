import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const StringInput = (props: StringInputProps) => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.text} value={props.value} onChangeText={props.setValue}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
  },
  layout: {
    flexDirection: "row"
  },
  text: {
    flexGrow: 1,
    fontSize: 20,
  },
});
export interface StringInputProps {
  value: string,
  setValue: (newValue: string) => void,
}

export default StringInput;
