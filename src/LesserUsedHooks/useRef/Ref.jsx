import React, { useEffect, useRef, useState } from "react";

function Ref() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef(); // this is for referencing input element
  const prevName = useRef(""); // for keeping track of the previos name

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }); // renderCount is not rerendered again as in case of state.

  const handleFocus = () => inputRef.current.focus();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it was {prevName.current}
      </div>
      <div>I rendered {renderCount.current}</div>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default Ref;
