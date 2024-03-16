import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { DateViewModel } from "../../models/DateViewModel";
import { Feather } from '@expo/vector-icons';

const TimeInput = (props: TimeInputProps) => {
  const [datePickerVisible, setDataPickerVisible] = useState(false);

  const dateView = new DateViewModel(props.date);
  const onDataChange = (event: DateTimePickerEvent, date: Date) => {
    if (event.type == "set") {
      props.setDate(date);
    }
    setDataPickerVisible(false);
  };

  return (
    <Pressable style={styles.container} onPress={() => setDataPickerVisible(true)}>
      <View style={styles.layout}>
        <Text style={styles.text}>{dateView.getHours()}:{dateView.getMinutes()}</Text>
        <Feather name="clock" size={24} color="black" />
      </View>
      {datePickerVisible && <DateTimePicker mode="time" display={"clock"} value={props.date} onChange={onDataChange} />}
    </Pressable>
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
export interface TimeInputProps {
  date: Date;
  setDate: (date: Date) => void;
}

export default TimeInput;
