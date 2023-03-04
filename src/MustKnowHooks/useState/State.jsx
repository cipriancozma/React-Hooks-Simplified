import React, { useState } from "react";

const initialCount = () => {
  console.log("count");
  return 0;
};

function State() {
  const [count, setCount] = useState(() => initialCount());

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default State;
