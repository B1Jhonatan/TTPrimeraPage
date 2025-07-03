import { InputTodoComponent } from "./InputTodoComponent";
import { BotonComponent } from "./BotonComponent";
import styles from "./ArrayTodo.module.css";

export const FormComponent = ({
  todoText,
  handleCreateTodo,
  handleChangeTodo,
  handleSubmit,
  className,
}) => {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <InputTodoComponent
          value={todoText}
          onChange={handleChangeTodo}
          placeholder={"Ingrese tarea"}
          className={styles.cardInput}
        />

        <BotonComponent
          name={"Agregar"}
          onClick={handleCreateTodo}
          css={styles.cardBotonNormal}
        />
      </form>
    </div>
  );
};
