import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { api } from "../../services/api";
import { toast, ToastContainer } from "react-toastify";

export function FormLogin() {
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

  function postLogin(data) {
    console.log(data);

    api
      .post("sessions", data)
      .then((resp) => {
        if (resp.status === 200) {
          window.localStorage.setItem("authToken", resp.data.token);
          toast.success("Conta logada com sucesso");
          setTimeout(() => navigate("/home"), 2000);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <StyledForm action="" onSubmit={handleSubmit(postLogin)}>
      <h2>Login</h2>
      <label htmlFor="">Email</label>
      <input type="text" {...register("email")} />
      {errors.email && errors.email.message}
      <label htmlFor="">Senha</label>
      <input placeholder="teste" type="text" {...register("password")} />
      <Button text="Entrar" model="primary" type="submit" />
      <span>Ainda não possui uma conta?</span>
      <Link to={"/register"}>
        <Button text="Cadastre-se" model="desability" />
      </Link>
      <ToastContainer />
    </StyledForm>
  );
}
