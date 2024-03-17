import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const NumberInput = (props: NumberInputProps) => {
  return (
    <View style={styles.container}>
        <TextInput keyboardType="numeric" style={styles.text} value={props.value.toString()} onChangeText={(value) => props.setValue(Number(value))}/>
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
export interface NumberInputProps {
  value: number,
  setValue: (newValue: number) => void,
}

export default NumberInput;
