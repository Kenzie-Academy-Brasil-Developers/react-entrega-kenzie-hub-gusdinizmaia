import { LoginBase } from "./style";

export function FormLogin() {
  return (
    <LoginBase action="">
      <label htmlFor="">Email</label>
      <input type="text" />
      <label htmlFor="">Senha</label>
      <input type="text" />
      <button>Entrar</button>
      <span>Ainda não possui uma conta?</span>
      <button>Cadastre-se</button>
    </LoginBase>
  );
}
