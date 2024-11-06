import { useState, useEffect, useRef } from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef(0);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);


    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

        // minutes = String(minutes).padStart(2, "0");
        // seconds = String(seconds).padStart(2, "0");
        // milliSeconds = String(milliSeconds).padStart(2, "0");

        return `${addZero(minutes)}:${addZero(seconds)}:${addZero(milliSeconds)}`;

    }

    function addZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;