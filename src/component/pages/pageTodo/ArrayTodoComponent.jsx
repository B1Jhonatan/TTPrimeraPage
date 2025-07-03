import React from "react";
import { BotonComponent } from "./BotonComponent";
import styles from "./ArrayTodo.module.css";

export const ArrayTodoComponent = ({ task, handleDeleteTodo }) => {
  return (
    <div className={styles.cardTask}>
      <p key={task.id} className={styles.cardParra}>
        {task.text}
      </p>
      <BotonComponent name={"Modificar"} css={styles.cardBotonNormal} />
      <BotonComponent name={"Completar"} css={styles.cardBotonNormal} />
      <BotonComponent
        css={styles.cardBotonEliminar}
        name={"Eliminar"}
        onClick={() => handleDeleteTodo(task.id)}
      />
    </div>
  );
};
