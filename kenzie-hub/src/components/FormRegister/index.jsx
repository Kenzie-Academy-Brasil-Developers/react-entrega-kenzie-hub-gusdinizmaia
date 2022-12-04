import { StyledForm } from "../FormLogin/style";
import { register, handleSubmit, useForm } from "react-hook-form";
import { InputForm } from "../InputForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Button";

export function FormRegister() {
  const formRequired = yup.object().shape({
    casa: yup.string().required("Email obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formRequired),
  });

  function teste(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <StyledForm action="" onSubmit={handleSubmit(teste)}>
      <h2>Crie sua conta</h2>
      <span>Rapido e grátis, vamos nessa</span>
      <InputForm
        text="Casa"
        register={register}
        property="casa"
        errors={errors}
      />
      <label htmlFor="">Email</label>
      <input type="text" {...register("email")} />
      <label htmlFor="">Nome</label>
      <input type="text" {...register("Nome")} />
      <label htmlFor="">Senha</label>
      <input type="text" {...register("Senha")} />
      <label htmlFor="">Confirmar Senha</label>
      <input type="text" {...register("Confirmar Senha")} />
      <label htmlFor="">Contato</label>
      <input type="text" {...register("contato")} />
      <label htmlFor="">Bio</label>
      <input type="text" {...register("Bio")} />
      <label htmlFor="">Selecionar módulo</label>
      <input type="text" {...register("Selecionar módulo")} />
      <Button text="cadastrar" type="submit" model="primary-negative"></Button>
    </StyledForm>
  );
}
