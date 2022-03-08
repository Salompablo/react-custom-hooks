import React, { useState } from "react";
import Button from "./components/Button/Button";
import Component1 from "./components/Component1/Component1";
import Component2 from "./components/Component2/Component2";
import CustomHook from "./components/ThemeProvider/CustomHook";
import UseCallBack from "./components/UseCallBack/UseCallBack";
import UseMemo from "./components/UseMemo/UseMemo";

export const ThemeContext = React.createContext();



function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = ()  => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }
  return(
    <div className="App">
    <ThemeContext.Provider value={darkTheme}>
      <Button onClick={toggleTheme}>Cambiar Tema</Button>
      <Component1 />
      <Component2 />
    </ThemeContext.Provider>
    <CustomHook />
    <UseCallBack />
    <UseMemo />
    </div>
  );
}

export default App;
