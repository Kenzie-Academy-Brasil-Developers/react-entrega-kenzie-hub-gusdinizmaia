import { createContext } from "react";
import { api } from "../../services/api";
import { useState } from "react";

export const ApiTechsContext = createContext({});

export function ApiTechsProvider({ children }) {
  const [id, setId] = useState();

  function deleteTech(data, e) {
    e.stopPropagation();

    api
      .delete(`users/techs/${data}`)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }
  function postTech(data) {
    api
      .post("users/techs", data)
      .then((resp) => resp.data)
      .catch((err) => console.log(err.response.data.message));
  }

  function putTech(data) {
    const status = { status: data.status };

    api
      .put(`users/techs/${id}`, status)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  return (
    <ApiTechsContext.Provider value={{ deleteTech, postTech, putTech, setId }}>
      {children}
    </ApiTechsContext.Provider>
  );
}
