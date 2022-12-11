import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { StyledAdd, StyledHeader, StyledHome, StyledListTechs } from "./style";
import { Cards } from "../../components/Cards";
import { ModalCreateTech } from "../../components/ModalCreateTech";

export function Home() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [modalTech, setModalTech] = useState(false);

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
  }, [user]);

  function deleteTech(data) {
    let token = window.localStorage.getItem("authToken");

    api
      .delete(`users/techs/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

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
        <section className="container__techs">
          <div>
            <h2>Tecnologias</h2>
            <StyledAdd onClick={(e) => setModalTech(true)} />
          </div>
          <StyledListTechs>
            {user?.techs.map((elem, index) => (
              <Cards
                key={index}
                name={elem.title}
                callback={deleteTech}
                status={elem.status}
                id={elem.id}
              />
            ))}
          </StyledListTechs>
        </section>
      </StyledHome>
      {modalTech && <ModalCreateTech closeModal={setModalTech} />}
    </React.Fragment>
  );
}
