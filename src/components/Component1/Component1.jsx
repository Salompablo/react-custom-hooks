import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

export default function Component1() {

    const darkTheme = useContext(ThemeContext);

    const styles = {
        backgroundColor: darkTheme ? "tomato" : "black",
        color:"white",
        width:"60%",
        height:"200px"
    }

    return (
    <div style={styles}>

        <h2>Component1</h2>
    
    </div>
)
}
