import React from "react";
import { Error } from "../Error";
import { StyledLabel, StyledInput } from "./style";

export function InputForm({ text, property, register, errors, desa, value }) {
  const propertyType = property.toLowerCase();

  return (
    <React.Fragment>
      <StyledLabel htmlFor="">{text}</StyledLabel>
      <StyledInput
        type={propertyType.includes("password") ? "password" : "text"}
        {...register(property)}
        // readOnly={desa ? "readonly" : ""}
        value={value ? value : ""}
      />
      {errors[property] ? <Error message={errors[property].message} /> : ""}
    </React.Fragment>
  );
}
