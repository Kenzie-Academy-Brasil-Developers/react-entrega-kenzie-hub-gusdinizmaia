import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { RenderInputsForm } from "../RenderInputsForm";
import { inputsLogin } from "../../database/inputsFormLogin";
import { Loading } from "../Loading";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";

export function FormLogin() {
  const [loading, setLoading] = useState(false);
  const { postLogin } = useContext(UserContext);

  const formRequired = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRequired),
  });

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");

    if (token) {
      navigate(`/home`);
    }
  });

  return (
    <StyledForm action="" onSubmit={handleSubmit(postLogin)}>
      <h2>Login</h2>
      <RenderInputsForm array={inputsLogin} errors={errors} hook={register} />
      <Button
        text={loading ? <Loading /> : "Entrar"}
        model="primary"
        type="submit"
      />
      <span>Ainda não possui uma conta?</span>
      <Link to={"/register"}>
        <Button text="Cadastre-se" model="desability" />
      </Link>
    </StyledForm>
  );
}
