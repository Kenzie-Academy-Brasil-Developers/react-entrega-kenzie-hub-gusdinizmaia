import { FormRegister } from "../../components/FormRegister";
import { Header } from "../../components/Header";
import { StyledRegister } from "./style";
import React from "react";

export function Register() {
  return (
    <React.Fragment>
      <StyledRegister>
        <section class="container__form">
          <Header form="register" redirection="/login" />
          <FormRegister />
        </section>
      </StyledRegister>
    </React.Fragment>
  );
}
