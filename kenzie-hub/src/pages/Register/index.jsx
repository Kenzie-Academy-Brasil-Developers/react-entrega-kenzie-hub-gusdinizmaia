import { FormRegister } from "../../components/FormRegister";
import { Header } from "../../components/Header";
import { StyledRegister } from "./style";
import { api } from "../../services/api";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  function getRegister() {
    api
      .get("users")
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }

  getRegister();

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
