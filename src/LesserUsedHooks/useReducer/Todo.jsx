import React from "react";
import { ACTIONS } from "./TodoReducer";

export default function Todo({ todo, dispatch }) {
  return (
    <>
      <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        <p>{todo.name}</p>
      </div>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </>
  );
}
