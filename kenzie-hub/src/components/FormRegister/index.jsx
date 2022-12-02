import { RegisterBase } from "./style";

export function FormRegister() {
  return (
    <RegisterBase action="">
      <label htmlFor="">Email</label>
      <input type="text" />
      <label htmlFor="">Senha</label>
      <input type="text" />
      <button>Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <button>Cadastre-se</button>
    </RegisterBase>
  );
}
