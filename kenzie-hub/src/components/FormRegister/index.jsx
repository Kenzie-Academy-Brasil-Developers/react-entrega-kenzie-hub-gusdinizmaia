import { useForm } from "react-hook-form";
import { RegisterBase } from "./style";

export function FormRegister() {
  const { register, handleSubmit } = useForm({});

  return (
    <RegisterBase action="" onSubmit={handleSubmit}>
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
      <button>Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <button>Cadastre-se</button>
    </RegisterBase>
  );
}
