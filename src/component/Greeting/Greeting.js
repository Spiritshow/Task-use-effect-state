import React from "react";
import Text from "./Text/Text";

const Greeting = ({prop}) => {

    return(
        <div className="greetingBox">
            <Text prop={prop}/>
        </div>
    )
}

export default Greeting;