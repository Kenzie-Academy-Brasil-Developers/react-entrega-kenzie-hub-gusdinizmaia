import { Link } from "react-router-dom";
import { HeaderBase } from "./style";
import { Button } from "../Button";

export function Header({ form }) {
  return (
    <HeaderBase form={form}>
      <div>
        <h1>Kenzie Hub</h1>
      </div>
      <nav>
        {form === "register" ? (
          <Link to={"/login"}>
            <Button text="Voltar" model="grey-3" />
          </Link>
        ) : (
          ""
        )}
      </nav>
    </HeaderBase>
  );
}
