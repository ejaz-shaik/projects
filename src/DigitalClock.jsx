import { useState, useEffect } from "react"

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return () =>
            clearInterval(intervalId); 
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours > 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
    }

    function addZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <>
            <h1>{formatTime()}</h1>
        </>
    )

}

export default DigitalClock;