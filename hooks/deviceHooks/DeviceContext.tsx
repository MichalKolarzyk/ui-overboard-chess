import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

export class DeviceState {
    isLoading: boolean;
    location: Location.LocationObject;
}


export const DeviceContext = React.createContext<DeviceState>(new DeviceState())

export const DeviceStateProvider = () : DeviceState => {
    const [location, setLocation] = useState<Location.LocationObject>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const saveLocation = async () => {
          setIsLoading(true);
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            console.error("Permission to access location was denied");
            return;
          }
          setLocation(await Location.getCurrentPositionAsync({}));
          setIsLoading(false);
        };

        saveLocation();
      }, []);


    return {
        isLoading,
        location,
    }
}