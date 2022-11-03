import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const useProtected = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    token || navigate("/login");
  }, [navigate]);
};
