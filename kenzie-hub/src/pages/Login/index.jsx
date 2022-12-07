import React from "react";
import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";
import { StyledLogin } from "./style";

export function Login() {
  return (
    <React.Fragment>
      <StyledLogin>
        <section className="container__form">
          <Header form="login" />
          <FormLogin />
        </section>
      </StyledLogin>
    </React.Fragment>
  );
}
