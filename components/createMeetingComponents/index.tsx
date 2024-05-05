import { Text, View, Button, StyleSheet } from "react-native";
import { CreateMeetingContext, CreateMeetingProvider, useCreateMeetingContext } from "./CreateMeetingContext";
import { DateInput, NumberInput, StringInput, TimeInput } from "../baseComponents";
import { colors } from "../../constants";
import LocationPicker from "../baseComponents/LocationPicker";
import FormOv from "../../baseComponents/forms";

const Main = (props: any) => {
  return (
    <CreateMeetingContext.Provider value={CreateMeetingProvider()}>{props.children}</CreateMeetingContext.Provider>
  );
};

const Form = () => {
  const context = useCreateMeetingContext();

  return (
    <View style={styles.container}>
      {/* <LocationPicker coordinate={context.coordinates} setCoordinate={context.setCoordinates} /> */}
      <FormOv>
        <FormOv.Label>Title</FormOv.Label>
        <FormOv.TextControll value={context.title} setValue={context.setTitle} />
      </FormOv>
      <View>
        <Text>Title</Text>
        <StringInput value={context.title} setValue={context.setTitle} />
        <Text style={{ color: colors.formError }}>{context.titleError}</Text>
      </View>
      <View>
        <Text>Start</Text>
        <DateInput date={context.start} setDate={context.setStart} />
        <Text style={{ color: colors.formError }}>{context.startError}</Text>
      </View>
      <View>
        <Text>At</Text>
        <TimeInput date={context.start} setDate={context.setStart} />
      </View>
      <View>
        <Text>Duration</Text>
        <View style={styles.hoursMinutesContainer}>
          <NumberInput value={context.durationHours} setValue={context.setDurationHours} />
          <Text>:</Text>
          <NumberInput value={context.durationMinutes} setValue={context.setDurationMinutes} />
        </View>
      </View>
    </View>
  );
};

const Submit = () => {
  const context = useCreateMeetingContext();
  return <Button disabled={!context.canCreate || context.isLoading} onPress={context.create} title="Create" />;
};

export const CreateMeeting = { Main, Form, Submit };

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  hoursMinutesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
