import React from "react";
import { useParams } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";
import { Header } from "../../components/Header";
import { StyledLogin } from "./style";

export function Login() {
  const { teste } = useParams();

  console.log(teste);

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
