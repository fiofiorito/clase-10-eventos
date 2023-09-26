import { useState } from "react";

const ColorSelector = () => {
    const [color, setColor] = useState("")
    const handleChange = (event) => {
        setColor(event.target.value);
    }
    return <div>
        <select title="a" onChange={handleChange}>
            <option value="violet">violeta</option>
            <option value="lightCoral">rosa</option>
            <option value="lightGreen">verde</option>
        </select>
        <div style={{ border: "1px solid black", width: "fit-content", padding: "2rem 1rem", backgroundColor: color }}>
            <p>yo cambio de color</p>
        </div>
    </div>
}

export default ColorSelector;