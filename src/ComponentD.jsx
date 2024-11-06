// Context topic : This is Consumer component
import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
    // Here component D is consumer of component A
    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>Component D</h1>
            <h3>{`Bye ${user}`}</h3>
        </div>
    )
}

export default ComponentD;