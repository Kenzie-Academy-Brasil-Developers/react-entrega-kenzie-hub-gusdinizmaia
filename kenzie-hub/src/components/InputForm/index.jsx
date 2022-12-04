import React from "react";

export function InputForm({ text, property, register, errors }) {
  // function as(property) {
  //   if (errors[property]) {
  //     return errors[property].message;
  //   }
  // }

  return (
    <React.Fragment>
      <label htmlFor="">{text}</label>
      <input type="text" {...register(property)} />
      {errors[property] ? <h1>{errors[property].message}</h1> : ""}
    </React.Fragment>
  );
}
