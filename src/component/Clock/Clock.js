import React, { useEffect, useState } from "react";
import "./Clock.css";

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
            {togle && <h3>Время {time.getHours}:{time.getMinutes}  делится на 5</h3>}
        </div>
    )
}

export default Clock;