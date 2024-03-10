import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChageTodoText = (e) => {
    e && setTodoText(e.target.value);
    console.log(todoText);
  };

  const submitTodo = () => {
    setTodoList([...todoList, todoText]);
    setTodoText("");
    console.log(todoList);
  };

  return (
    <>
      <Form
        todoText={todoText}
        onChageTodoText={onChageTodoText}
        submitTodo={submitTodo}
      />
      <List todoList={todoList} />
    </>
  );
}

export default App;
