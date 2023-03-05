import React, { useState } from "react";
import List from "./List";

export default function DeferredValue() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type={"text"} value={input} onChange={handleChange} />
      <List input={input} />
    </div>
  );
}
