import React from "react";
import { Error } from "../Error";

export function InputForm({ text, property, register, errors }) {
  const propertyType = property.toLowerCase();

  return (
    <React.Fragment>
      <label htmlFor="">{text}</label>
      <input
        type={propertyType.includes("password") ? "password" : "text"}
        {...register(property)}
      />
      {errors[property] ? <Error message={errors[property].message} /> : ""}
    </React.Fragment>
  );
}
