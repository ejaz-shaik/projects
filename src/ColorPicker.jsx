import { useState } from "react"
import './index.css'

function ColorPicker() {

    const [color, setColor] = useState("#000");

    function handleColorChange(event) {
        setColor(event.target.value);
    }
    return(
        <div className="color-div">
            <h1>Color Picker</h1>
            <div className="color-card" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker