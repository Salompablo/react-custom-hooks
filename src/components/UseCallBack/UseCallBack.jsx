import React, { useState, useCallback } from 'react'
import Lista from './Lista'

export default function UseCallBack() {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    
    const handleChange = (e) => {
        setNumber(parseInt(e.target.value))
    }
    
    const handleClick = () => {
        setDark(prevDark => !prevDark)
    }

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number]);


    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black" 
    }

return (
    <div style={theme}>
        <input type="number" onChange={handleChange}/>
        <button onClick={handleClick}>Cambiar Tema</button>

        <Lista getItems={getItems}/>
    </div>
)
}
