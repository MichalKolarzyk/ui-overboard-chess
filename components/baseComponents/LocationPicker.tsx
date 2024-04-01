import { StyleSheet } from "react-native";
import MapView, { LatLng, LongPressEvent, MapPressEvent, Marker } from "react-native-maps";
import { useDevice } from "../../hooks/deviceHooks";

const LocationPicker = (props: LocationPickerProps) => {
  const device = useDevice();
  
  const onLongPress = (event: LongPressEvent) => {
    props.setCoordinate(event.nativeEvent.coordinate);
  };

  return (
      <MapView initialRegion={{
        latitude: device.location.coords.latitude,
        longitude: device.location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      }} 
      onLongPress={onLongPress}
      style={styles.map}>
        {props.coordinate != null && <Marker coordinate={props.coordinate} />}
      </MapView>
  );
};

export interface LocationPickerProps {
  coordinate: LatLng;
  setCoordinate: (value: LatLng) => void;
}

export default LocationPicker;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
