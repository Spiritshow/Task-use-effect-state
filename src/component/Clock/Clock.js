import React, { useEffect, useState } from "react";
import "./Clock.css";

const timeZones = {
    "Moscow":"Europe/Moscow",
    "Tokyo":"Asia/Tokyo",
    "Tyumen":"Asia/Yekaterinburg"
};

const Clock = ({prop}) => {
    const [togle, setTogle] = useState(false);
    const [time, setTime] = useState(new Date());
    const timeZone = timeZones[prop.country];
    const minutes = time.getMinutes();

    const tick = () => {
        setTime(new Date());
    }

    useEffect( () => {
        if(minutes%5 === 0) {setTogle(true)}
            else {setTogle(false)};
    },[minutes])

    useEffect( () => {
        const timer = setInterval(() => tick(), 1000);

        return() => clearInterval(timer);
    }, [])

    return(
        <div className="timeBox">
            <h2 className="timeText">{prop.country}</h2>
            <h1 className="timeText">{time.toLocaleTimeString("ru-RU",{timeZone, hour: '2-digit', minute:'2-digit', second: '2-digit'})}</h1>
            {togle && <h3>Время делится на 5</h3>}
        </div>
    )
}

export default Clock;