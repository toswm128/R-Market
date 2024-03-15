import React from "react";
import Item from "./Item.jsx";

const List = ({ todoList, checkTodo, deleteTodo }) => {
  return (
    <>
      {todoList.map((todo) => (
        <Item todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      ))}
    </>
  );
};

export default List;
