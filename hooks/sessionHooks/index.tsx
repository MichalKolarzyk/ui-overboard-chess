import React from "react"
import { SessionContext, SessionStateProvider } from "./SessionContext"

export const SessionProvider = (props: any) => {
    return <SessionContext.Provider value={SessionStateProvider()}>
        {props.children}
    </SessionContext.Provider>
}

export const useSession = () => React.useContext(SessionContext)