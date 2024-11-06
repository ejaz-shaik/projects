// Context concept : this is Provider component

import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
const [user, setUser] = useState("Ejaz");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h3>{`Hello ${user}`}</h3>
            {/* component A is provider */}
            <UserContext.Provider value={user}> 
            <ComponentB />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA;