import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    function getUser() {
      let token = window.localStorage.getItem("authToken");

      if (!token) {
        setLoading(false);
        return;
      }

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const user = api
        .get("profile")
        .then((resp) => {
          setUser(resp.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

      return user;
    }

    getUser();
  }, [user]);

  function postLogin(data) {
    // setLoading(true);

    const token = localStorage.getItem("authToken");

    api
      .post("sessions", data)
      .then((resp) => {
        if (resp.status === 200) {
          window.localStorage.setItem("authToken", resp.data.token);
          window.localStorage.setItem("userId", resp.data.user.id);

          api.defaults.headers.common.authorization = `Bearer ${token}`;

          setUser(resp.data.user);

          toast.success("Conta logada com sucesso");
          setTimeout(() => navigate(`/home`), 3000);
        } else {
          toast.error(resp.data.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
      });
  }

  return (
    <UserContext.Provider value={{ user, loading, setUser, postLogin }}>
      {children}
    </UserContext.Provider>
  );
}
// export const UserProvider = ({ children }) => {
//   return <UserContext.Consumer>{children}</UserContext.Consumer>;
// };
