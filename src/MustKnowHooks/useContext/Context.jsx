import React from "react";
import ContextComponent from "./ContextComponent";
import { ThemeProvider } from "./ThemeProvider";

function Context() {
  return (
    <>
      <ThemeProvider>
        <ContextComponent />
      </ThemeProvider>
    </>
  );
}

export default Context;
