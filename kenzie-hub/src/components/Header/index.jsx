import { Link, useNavigate } from "react-router-dom";
import { HeaderBase } from "./style";
import { Button } from "../Button";

export function Header({ form, className, redirection, buttonCallback }) {
  const navigate = useNavigate();

  return (
    <HeaderBase
      form={form}
      className={className}
      // buttonCallback={navigate(buttonCallback)}
    >
      <div>
        <h1>Kenzie Hub</h1>
      </div>
      <nav>
        {form === "login" ? (
          ""
        ) : (
          <Link to={redirection}>
            <Button text="Voltar" callback={buttonCallback} model="grey-3" />
          </Link>
        )}
      </nav>
    </HeaderBase>
  );
}
