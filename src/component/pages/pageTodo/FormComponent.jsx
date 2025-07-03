import React from "react";
import { InputTodoComponent } from "./InputTodoComponent";
import { BotonComponent } from "./BotonComponent";

export const FormComponent = ({
  todoText,
  handleCreateTodo,
  handleChangeTodo,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <InputTodoComponent
            value={todoText}
            onChange={handleChangeTodo}
            placeholder={"Ingrese tarea"}
          />
        </div>
        <div>
          <BotonComponent name={"Agregar"} onClick={handleCreateTodo} />
        </div>
      </form>
    </div>
  );
};
