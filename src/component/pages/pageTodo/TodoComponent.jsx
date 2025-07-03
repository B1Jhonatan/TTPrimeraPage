import React, { useState } from "react";
import { FormComponent } from "./FormComponent";
import { ArrayTodoComponent } from "./ArrayTodoComponent";
import styles from "./ArrayTodo.module.css";

export const TodoComponent = () => {
  const [arrayTodo, setArrayTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleChangeTodo = (e) => {
    setTodoText(e.target.value);
    console.log(e.target.value);
  };

  const handleCreateTodo = () => {
    if (todoText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    console.log(newTodo);
    setArrayTodo([...arrayTodo, newTodo]);
    setTodoText("");
    console.log(arrayTodo);
  };

  const handleReadTodo = () => {
    console.log("Total de tareas:", arrayTodo.length);
    console.log(arrayTodo);
  };

  //const hanbleUpdateTodo = (id, texto) => {};

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
        className={styles.formDiv}
      />
      <div className={styles.cards}>
        {arrayTodo.map((task) => {
          return (
            <ArrayTodoComponent
              task={task}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};
