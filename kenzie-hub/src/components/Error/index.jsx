import React from "react";
import { StyledError } from "./style";

export function Error({ message }) {
  return (
    <React.Fragment>
      <StyledError>{message}</StyledError>
    </React.Fragment>
  );
}
