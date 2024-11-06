import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0);
    const [shipping, setShipping] = useState("");
    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const handleChangeRadio =() => {
        setShipping(event.target.value);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
            <br/>
            <label><input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleChangeRadio} />Pick up</label><br/>
            <label><input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleChangeRadio} />Delivery</label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default Counter