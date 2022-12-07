import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { StyledHeader, StyledHome } from "./style";

export function Home() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    function getUser() {
      let token = window.localStorage.getItem("authToken");

      if (!token) {
        navigate("/login");
        toast.error("Nenhum usuário conectado");
      }

      const myHeaders = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const user = api
        .get("profile", myHeaders)
        .then((resp) => setUser(resp.data))
        .catch((err) => console.log(err));

      return user;
    }
    getUser();
  }, []);

  return (
    <React.Fragment>
      <StyledHeader
        redirection="/login"
        buttonCallback={(e) => window.localStorage.clear()}
      />
      <StyledHome>
        <section className="container__user">
          <h2>Olá, {user?.name}</h2>
          <h3>{user?.course_module}</h3>
        </section>
        <section className="container__undefined">
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <h3>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h3>
        </section>
      </StyledHome>
    </React.Fragment>
  );
}
