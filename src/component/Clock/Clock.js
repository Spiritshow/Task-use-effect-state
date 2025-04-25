import React, { useEffect, useState } from "react";
import "./Clock.css";

let country = new Map();
country.set("Tyumen", 0);
country.set("Moscow", -2);
country.set("Tokyo", 4);

const Clock = () => {
    const [togle, setTogle] = useState(false);
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect( () => {
        console.log(time.getMinutes()%5);
        if(time.getMinutes()%5 == 0) {setTogle(true)}
            else {setTogle(false)};
    },[time.getMinutes()])

    useEffect( () => {
        const timer = setInterval(() => tick(), 1000);

        return() => clearInterval(timer);
    }, [])

    return(
        <div className="timeBox">
            <h1 className="timeText">{time.toLocaleTimeString()}</h1>
            {togle && <h3>Время {time.getUTCHours()}:{time.getUTCMinutes()}  делится на 5</h3>}
        </div>
    )
}

export default Clock;