import React, { useState, useMemo} from 'react'

export default function UseMemo() {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    
    const handleChange = (e) => {
        setNumber(parseInt(e.target.value))
    }
    
    const handleClick = () => {
        setDark(prevDark => !prevDark)
    }

    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]); 

    

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black" 
    }

return (
    <>
        <input type="number" value={number} onChange={handleChange}/>
        <button onClick={handleClick}>Cambiar Tema</button>

        <div style={theme}>{doubleNumber}</div>
    </>
)
}

function slowFunction(num) {
    console.log("calling slow function");
    for (let i = 0; i <= 10000000; i++){}
    return num * 2;
}
