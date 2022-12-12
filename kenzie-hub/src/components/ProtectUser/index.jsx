import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export function ProtectUser() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}
