import React from "react";
import { InputContainer } from "./InputStyle.styles";

const Input = ({ placeholder, onChangeFunction, type }) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      onChange={(event) => {
        const value = event.target.value;
        onChangeFunction(value);
      }}
    />
  );
};

export default Input;
