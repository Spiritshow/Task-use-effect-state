import React from "react";
import "./Text.css";

const Text = ({prop}) => {
    console.log(prop);
    let startName = prop.name;
    if(startName == prop.name) {return( <h2 className="customText">Привет, {prop.name}</h2> )}
                           else{return( <h2 className="customText">Дарова, теперь ты {prop.name}</h2> )}
}

export default Text;