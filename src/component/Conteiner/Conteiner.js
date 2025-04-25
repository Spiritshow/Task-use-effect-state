import React, { useEffect, useState } from "react";
import "./Conteiner.css";
import RandomName from "./RandomName/RandomeName";
import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import Clock from "../Clock/Clock";

const Conteiner = () => {

    const [prop, setProp] = useState({name: RandomName()});

    const tick = () => {
        setProp({name: RandomName()})
    }

    useEffect(() =>{
        const timer = setInterval(
            () => tick(),
            1000*10
        );
        return() => {clearInterval(timer)}
    },[]);

    return(
        <div className="customConteiner">
            <Header/>
            <Greeting prop={prop}/>
            <Clock/>
        </div>
    )
}

export default Conteiner;