import { TextField } from "@mui/material";
import React from "react";

const InputComponent = (props) => {
  const {
    margin,
    required,
    fullWidth,
    name,
    label,
    type,
    id,
    autoComplete,
    value,
    onChange,
    error,
    helperText,
  } = props;
  return (
    <TextField
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      name={name}
      label={label}
      type={type}
      id={id}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
};

export default InputComponent;
