import React from "react";
import { useTheme } from "./ThemeProvider";

function ContextComponent() {
  const { darkTheme, toggleTheme } = useTheme();

  const style = {
    width: "200px",
    height: "200px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };
  return (
    <>
      <button onClick={toggleTheme}>Toogle Theme</button>
      <div style={style}>ContextComponent</div>
    </>
  );
}

export default ContextComponent;
