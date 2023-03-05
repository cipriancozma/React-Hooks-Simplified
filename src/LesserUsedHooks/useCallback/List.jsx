import React, { useEffect } from "react";

function List({ getItems }) {
  const items = getItems();

  useEffect(() => {
    console.log("updating items");
  }, [getItems]);
  return (
    <div>
      {items.map((item, idx) => {
        return <div key={idx}>{item} </div>;
      })}
    </div>
  );
}

export default List;
