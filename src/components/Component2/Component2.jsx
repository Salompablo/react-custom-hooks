import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

export default function Component1() {

    const darkTheme = useContext(ThemeContext);

    const styles = {
        backgroundColor: darkTheme ? "black" : "tomato",
        color:"white",
        width:"60%",
        height:"200px"
    }
    
    return (
    <div style={styles}>

        <h2>Component2</h2>
    
    </div>
)
}