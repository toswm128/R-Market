import React from "react";
import Item from "./Item.jsx";

const List = ({ todoList }) => {
  return (
    <>
      {todoList.map((todo) => (
        <Item todo={todo} />
      ))}
    </>
  );
};

export default List;
