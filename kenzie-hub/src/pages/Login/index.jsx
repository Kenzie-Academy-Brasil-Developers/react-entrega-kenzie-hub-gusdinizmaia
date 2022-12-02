import { FormLogin } from "../../components/FormLogin";
import { StyledLogin } from "./style";

export function Login() {
  return (
    <StyledLogin>
      <section className="container__form">
        <FormLogin />
      </section>
    </StyledLogin>
  );
}
