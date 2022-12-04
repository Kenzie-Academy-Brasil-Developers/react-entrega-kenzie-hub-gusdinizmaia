import { FormRegister } from "../../components/FormRegister";
import { Header } from "../../components/Header";
import { StyledRegister } from "./style";
import { api } from "../../services/api";
import React from "react";

export function Register() {
  function getRegister() {
    api
      .get("users")
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }

  getRegister();

  return (
    <React.Fragment>
      <Header form="register" />
      <StyledRegister>
        <section class="container__form">
          <FormRegister />
        </section>
      </StyledRegister>
    </React.Fragment>
  );
}
