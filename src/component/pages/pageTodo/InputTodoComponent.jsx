import React from "react";

export const InputTodoComponent = ({ onChange, placeholder }) => {
  return <input type="text" onChange={onChange} placeholder={placeholder} />;
};
