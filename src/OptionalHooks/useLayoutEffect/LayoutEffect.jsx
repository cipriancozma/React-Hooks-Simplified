import React, { useLayoutEffect, useState } from "react";
import AnotherLayoutEffect from "./AnotherLayoutEffect";

// useEffect and useLayoutEffect are similar, the difference is the fact that useEffect is async and useLayoutEffect is sync.
// useLayoutEffect is mostly use when you want to move things in the DOM, things that you cannot do with useEffect
export default function LayoutEffect() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <div>{count}</div>
      <AnotherLayoutEffect />
    </div>
  );
}
