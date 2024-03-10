import React from "react";

const Form = ({ todoText, onChageTodoText, submitTodo }) => {
  const onSubmitTodo = (e) => {
    e.preventDefault();
    submitTodo();
  };

  return (
    <>
      <form onSubmit={onSubmitTodo}>
        <input type="text" value={todoText || ""} onChange={onChageTodoText} />
        <button>추가하기</button>
      </form>
    </>
  );
};

export default Form;
