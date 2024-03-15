import React from "react";

const Item = ({ todo, checkTodo, deleteTodo }) => {
  return todo.deletedIndex === null ? (
    <div style={{ display: "flex" }}>
      <div
        style={{ textDecoration: todo.isChecked && "line-through" }}
        onClick={() => checkTodo(todo.id)}
      >
        {todo.text}
      </div>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </div>
  ) : (
    <></>
  );
};

export default Item;
