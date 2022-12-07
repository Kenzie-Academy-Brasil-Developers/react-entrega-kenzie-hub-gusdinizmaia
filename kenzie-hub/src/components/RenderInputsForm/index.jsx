import React from "react";
import { InputForm } from "../InputForm";

export function RenderInputsForm({ array, hook, errors }) {
  return (
    <React.Fragment>
      {array.map((elem) => (
        <InputForm
          key={elem.property}
          text={elem.text}
          register={hook}
          property={elem.property}
          errors={errors}
        />
      ))}
    </React.Fragment>
  );
}
