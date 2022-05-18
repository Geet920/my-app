import React, { useState, useEffect } from "react";
const ClockWithEffect = () => {
    const [date, setDate] = useState(new Date());
    const tick = () => {
        setDate(new Date());
    };
    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => clearInterval(timer);
    });
    return (<div><h1>It is right now {date.toLocaleTimeString()}</h1></div>)
}
export default ClockWithEffect;