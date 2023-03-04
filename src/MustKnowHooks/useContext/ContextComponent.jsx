import React, { useContext } from "react";
import { ThemeContext } from "./Context";

function ContextComponent() {
  const darkTheme = useContext(ThemeContext);

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
  return <div style={style}>ContextComponent</div>;
}

export default ContextComponent;
