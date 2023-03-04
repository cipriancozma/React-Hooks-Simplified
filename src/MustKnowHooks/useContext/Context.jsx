import React, { createContext, useState } from "react";
import ContextComponent from "./ContextComponent";

export const ThemeContext = createContext();

function Context() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toogleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>Toogle Theme</button>
        <ContextComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default Context;
