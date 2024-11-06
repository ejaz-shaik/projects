import { useState, useRef, useEffect } from "react";

function UseRef() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    useEffect(() => {
        console.log("Rendered component");
    });

    function handleClick1 () {
        ref1.current.style.backgroundColor = "Purple";
        ref2.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "";
        
    }

    function handleClick2 () {
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "Purple";
        ref3.current.style.backgroundColor = "";
        
    }

    function handleClick3 () {
        ref1.current.style.backgroundColor = "";
        ref2.current.style.backgroundColor = "";
        ref3.current.style.backgroundColor = "Purple";
        
    }

    return (
        <div>
            <button onClick={handleClick1}>Click me!</button>
            <input ref={ref1} />
            <button onClick={handleClick2}>Click me!</button>
            <input ref={ref2} />
            <button onClick={handleClick3}>Click me!</button>
            <input ref={ref3} />
        </div>
    )
}

export default UseRef;