import React, { useState } from "react";
import { FormComponent } from "./FormComponent";
import { ArrayTodoComponent } from "./ArrayTodoComponent";

export const TodoComponent = () => {
  const [arrayTodo, setArrayTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleChangeTodo = (e) => {
    setTodoText(e.target.value);
  };

  const handleCreateTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setArrayTodo([...arrayTodo, newTodo]);
    setTodoText("");
  };

  const handleReadTodo = () => {
    console.log("Total de tareas:", arrayTodo.length);
    console.log(arrayTodo);
  };

  const hanbleUpdateTodo = (id, texto) => {};

  const handleDeleteTodo = (id) => {
    const filtrado = arrayTodo.filter((tarea) => tarea.id !== id);
    setArrayTodo(filtrado);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <FormComponent
        todoText={todoText}
        handleCreateTodo={handleCreateTodo}
        handleReadTodo={handleReadTodo}
        handleSubmit={handleSubmit}
        handleChangeTodo={handleChangeTodo}
      />
      <ArrayTodoComponent
        arrayTodo={arrayTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};
