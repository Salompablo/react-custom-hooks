import React, {useState, useContext} from 'react'

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export default function ThemeProvider( { children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = ()  => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
}
return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
)
}
