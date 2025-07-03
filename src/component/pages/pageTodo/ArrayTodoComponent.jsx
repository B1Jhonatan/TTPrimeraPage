import React from "react";
import { BotonComponent } from "./BotonComponent";

export const ArrayTodoComponent = ({ arrayTodo, handleDeleteTodo }) => {
  return (
    <div>
      {arrayTodo.map((t) => (
        <div>
          <p key={t.id}>{t.text}</p>
          <BotonComponent name={"Modificar"} />
          <BotonComponent
            name={"Eliminar"}
            onClick={() => handleDeleteTodo(t.id)}
          />
          <BotonComponent name={"Completar"} />
        </div>
      ))}
    </div>
  );
};
