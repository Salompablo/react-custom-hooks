import React, { useState } from 'react'

export const useCounter = () => {

    const [value, setValue] = useState(0);

    const increase = () => {
        setValue(value + 1);
    }

    const decrease = () => {
        setValue(value - 1);
        if(value < 1){
            setValue(0);
        }
    }

    const reset = () => {
        setValue(0);
    }

    return {
        value,
        increase,
        decrease,
        reset
    }

}

export default function CustomHook() {

    const counter = useCounter();
    
    const styles = {
        border: "solid 1px darkblue",
        width: "40%",
        height: "100px",
        marginTop: "50px",
        textAlign: "center"
    }

return (
    <div style={styles}>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>+</button>
        <button onClick={counter.decrease}>-</button>
        <button onClick={counter.reset}>Reset</button>
    </div>
)
}
