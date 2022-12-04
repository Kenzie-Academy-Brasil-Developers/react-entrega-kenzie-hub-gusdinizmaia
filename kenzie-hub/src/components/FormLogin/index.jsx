import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export function FormLogin() {
  const formRequired = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRequired),
  });

  function onSubmitFunction(data) {
    console.log(data);
  }

  return (
    <StyledForm action="" onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Login</h2>
      <label htmlFor="">Email</label>
      <input type="text" {...register("email")} />
      {errors.email && errors.email.message}
      <label htmlFor="">Senha</label>
      <input placeholder="teste" type="text" {...register("senha")} />
      <Button text="Entrar" model="primary" type="submit" />
      <span>Ainda não possui uma conta?</span>
      <Link to={"/register"}>
        <Button text="Cadastre-se" model="desability" />
      </Link>
    </StyledForm>
  );
}
