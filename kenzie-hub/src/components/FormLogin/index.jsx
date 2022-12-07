import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { RenderInputsForm } from "../RenderInputsForm";
import { inputsLogin } from "../../database/inputsFormLogin";
import { Loading } from "../Loading";
import { useState } from "react";

export function FormLogin() {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    api
      .post("sessions", data)
      .then((resp) => {
        if (resp.status === 200) {
          window.localStorage.setItem("authToken", resp.data.token);
          window.localStorage.setItem("userId", resp.data.user.id);
          toast.success("Conta logada com sucesso");
          setTimeout(() => navigate(`/home/${resp.data.user.id}`), 3000);
        } else {
          toast.error(resp.data.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
      });
  }

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
