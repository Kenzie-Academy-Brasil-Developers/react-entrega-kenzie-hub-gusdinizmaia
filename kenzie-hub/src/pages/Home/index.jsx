import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { StyledAdd, StyledHeader, StyledHome, StyledListTechs } from "./style";
import { Cards } from "../../components/Cards";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import { UserContext } from "../../contexts/UserContext";
import { ModalEditTech } from "../../components/ModalEditTech";

export function Home() {
  const [modalTech, setModalTech] = useState(false);
  const { user } = useContext(UserContext);
  const [idTech, setIdTech] = useState(false);

  function deleteTech(data) {
    api
      .delete(`users/techs/${data}`)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }
  function postTech(data) {
    api
      .post("users/techs", data)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err.response.data.message));
  }

  return (
    <React.Fragment>
      {/* <ProtectUser /> */}
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
            <StyledAdd onClick={(e) => setModalTech("create")} />
          </div>
          <StyledListTechs>
            {user?.techs.map((elem, index) => (
              <Cards
                key={index}
                name={elem.title}
                status={elem.status}
                id={elem.id}
                elem={elem}
                callback={deleteTech}
                editTech={setModalTech}
                callbackEdit={setIdTech}
              />
            ))}
          </StyledListTechs>
        </section>
      </StyledHome>
      {modalTech === "create" && (
        <ModalCreateTech callback={postTech} closeModal={setModalTech} />
      )}
      {modalTech === "edit" && (
        <ModalEditTech elem={idTech} closeModal={setModalTech} />
      )}
    </React.Fragment>
  );
}
