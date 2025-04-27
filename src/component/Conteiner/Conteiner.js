import React, { useEffect, useState } from "react";
import "./Conteiner.css";
import RandomName from "./RandomName/RandomeName";
import Header from "../Header/Header";
import Greeting from "../Greeting/Greeting";
import Clock from "../Clock/Clock";
import NaynCat from "../naynCat/naynCat";
import CountClick from "../CountClick/CountClick";

const Conteiner = () => {

    const [prop, setProp] = useState({name: RandomName()});
    const [toggler, setToggler] = useState(false);

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
            <CountClick onToggle={setToggler}/>
            <Greeting prop={prop}/>
            <NaynCat toggler={toggler}/>
            <div className="timeZoneBox">
                <Clock prop={{country: "Moscow"}}/>
                <Clock prop={{country: "Tyumen"}}/>
                <Clock prop={{country: "Tokyo"}}/>
            </div>
        </div>
    )
}

export default Conteiner;