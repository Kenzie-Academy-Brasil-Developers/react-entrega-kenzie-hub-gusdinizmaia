import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { StyledAdd, StyledHeader, StyledHome, StyledListTechs } from "./style";
import { Cards } from "../../components/Cards";
import { ModalCreateTech } from "../../components/ModalCreateTech";
import { UserContext } from "../../contexts/UserContext";
import { ModalEditTech } from "../../components/ModalEditTech";
import { ApiTechsContext } from "../../contexts/ApiTechsContext";

export function Home() {
  const [modalTech, setModalTech] = useState(false);
  const { user } = useContext(UserContext);
  const [itemTech, setItemTech] = useState(null);
  const { deleteTech, postTech } = useContext(ApiTechsContext);

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
            <StyledAdd onClick={(e) => setModalTech("create")} />
          </div>
          <StyledListTechs>
            {user?.techs.map((elem, index) => (
              <Cards
                key={index}
                name={elem.title}
                status={elem.status}
                id={elem.id}
                deleteItem={deleteTech}
                modalEdit={setModalTech}
                editItem={setItemTech}
                elem={elem}
              />
            ))}
          </StyledListTechs>
        </section>
      </StyledHome>
      {modalTech === "create" && (
        <ModalCreateTech callback={postTech} closeModal={setModalTech} />
      )}
      {modalTech === "edit" && (
        <ModalEditTech elem={itemTech} closeModal={setModalTech} />
      )}
    </React.Fragment>
  );
}
