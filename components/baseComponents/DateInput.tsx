import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { DateViewModel } from "../../models/DateViewModel";
import { Fontisto } from "@expo/vector-icons";

const DateInput = (props: DateInputProps) => {
  const [datePickerVisible, setDataPickerVisible] = useState(false);

  const dateView = new DateViewModel(props.date);
  const onDataChange = (event: DateTimePickerEvent, date: Date) => {
    setDataPickerVisible(false);
    props.setDate(date);
  };

  return (
    <View>
      <Pressable style={styles.container} onPressIn={() => setDataPickerVisible(true)}>
        <View style={styles.layout}>
          <Text style={styles.text}>{dateView.getDate()}</Text>
          <Fontisto name="date" size={24} color="#fff" />
        </View>
      </Pressable>
      {datePickerVisible && <DateTimePicker disabled={true} minimumDate={new Date(Date.now())} value={props.date} onChange={onDataChange} />}
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
    flexDirection: "row",
  },
  text: {
    flexGrow: 1,
    fontSize: 20,
  },
});
export interface DateInputProps {
  date: Date;
  setDate: (date: Date) => void;
}

export default DateInput;
