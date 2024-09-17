import { useEffect } from "react";
import { useAuth } from "./context/AuthProvider";
import { useNavigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const { isAuthen } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthen) navigate("/Hotel/login");
  }, [isAuthen, navigate]);
  return isAuthen ? children : null;
}

export default ProtectRoute;
