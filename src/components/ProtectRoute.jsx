import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

function ProtectRoute({ children }) {
  const { isAuthen } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthen) navigate("/Hotel/login");
  }, [isAuthen, navigate]);
  return isAuthen ? children : null;
}

export default ProtectRoute;
