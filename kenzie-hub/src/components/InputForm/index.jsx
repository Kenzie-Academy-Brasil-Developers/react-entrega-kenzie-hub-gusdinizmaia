import React from "react";
import { Error } from "../Error";

export function InputForm({ text, property, register, errors }) {
  return (
    <React.Fragment>
      <label htmlFor="">{text}</label>
      <input
        type={property === "password" ? property : "text"}
        {...register(property)}
      />
      {errors[property] ? <Error message={errors[property].message} /> : ""}
    </React.Fragment>
  );
}
