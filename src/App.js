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
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        isChecked: false,
        text: todoText,
        deletedIndex: null,
      },
    ]);
    setTodoText("");
  };

  const checkTodo = (selectedId) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === selectedId ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const deleteTodo = (selectedId) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === selectedId ? { ...todo, deletedIndex: selectedId } : todo
      )
    );
  };

  return (
    <>
      <Form
        todoText={todoText}
        onChageTodoText={onChageTodoText}
        submitTodo={submitTodo}
      />
      <List todoList={todoList} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
