import React, { useState } from "react";
import "./Text.css";

const Text = ({prop}) => {
    const [name, setName] = useState(prop.name);
    if(name == prop.name) {return( <h2 className="customText">Привет, {prop.name}</h2> )}
                           else{return( <h2 className="customText">Дарова, теперь ты {prop.name}</h2> )}
}

export default Text;