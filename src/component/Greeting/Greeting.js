import React from "react";
import Text from "./Text/Text";
import "./Greeting.css";

const Greeting = ({prop}) => {

    return(
        <div className="greetingBox">
            <Text prop={prop}/>
        </div>
    )
}

export default Greeting;