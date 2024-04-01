import React from "react";
import { DeviceContext, DeviceStateProvider } from "./DeviceContext";

export const DeviceProvider = (props: any) => {
    return <DeviceContext.Provider value={DeviceStateProvider()}>
        {props.children}
    </DeviceContext.Provider>
}

export const useDevice = () => React.useContext(DeviceContext)