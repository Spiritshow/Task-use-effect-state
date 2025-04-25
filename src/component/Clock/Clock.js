import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {

    const [time, setTime] = useState(new Date());

    const tick = () => {
        return(setTime(new Date()));
    }

    useEffect( () => {
        const timer = setInterval(() => tick(), 1000);

        return() => clearInterval(timer);
    }, [])

    return(
        <div className="timeBox">
            <h1 className="timeText">{time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Clock;