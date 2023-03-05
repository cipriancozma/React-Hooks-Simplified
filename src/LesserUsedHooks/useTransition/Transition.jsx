import React, { useState, useTransition } from "react";

export default function Transition() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i <= LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div>
      <input type={"text"} value={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, idx) => {
            return <div key={idx}> {item} </div>;
          })}
    </div>
  );
}
