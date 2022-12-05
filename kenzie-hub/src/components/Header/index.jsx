import { Link } from "react-router-dom";
import { HeaderBase } from "./style";
import { Button } from "../Button";

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
          <Link to={redirection}>
            <Button text="Voltar" callback={buttonCallback} model="grey-3" />
          </Link>
        )}
      </nav>
    </HeaderBase>
  );
}
