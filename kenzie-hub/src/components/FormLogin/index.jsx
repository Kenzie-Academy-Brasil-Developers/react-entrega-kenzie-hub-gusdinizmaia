import { useForm } from "react-hook-form";
import { LoginBase } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    <LoginBase action="" onSubmit={handleSubmit(onSubmitFunction)}>
      <label htmlFor="">Email</label>
      <input type="text" {...register("email")} />
      {}
      <label htmlFor="">Senha</label>
      <input type="text" {...register("senha")} />
      <button>Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <button>Cadastre-se</button>
    </LoginBase>
  );
}
