import { Link } from "react-router-dom";
import { HeaderBase } from "./style";
import { StyledLink } from "./style";

export function Header({ form, className, redirection, buttonCallback }) {
  return (
    <HeaderBase form={form} className={className}>
      <div>
        <h1>Kenzie Hub</h1>
      </div>
      <nav>
        {form === "login" ? (
          ""
        ) : (
          <StyledLink onClick={buttonCallback} to={redirection}>
            Voltar
          </StyledLink>
        )}
      </nav>
    </HeaderBase>
  );
}
