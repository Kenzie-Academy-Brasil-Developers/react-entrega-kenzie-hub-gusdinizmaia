import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

import { UserContext, UserProvider } from "../contexts/UserContext";
import { ProtectUser } from "../components/ProtectUser";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home/" element={<ProtectUser />}>
        {/* <UserProvider> */}
        <Route path=":id" element={<Home />} />
        {/* </UserProvider> */}
      </Route>
      <Route path="*" element={<Navigate to={"login"} />} />
    </Routes>
  );
}
