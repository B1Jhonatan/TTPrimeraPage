import React from "react";

export const InputTodoComponent = ({ onChange, placeholder, className }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};
