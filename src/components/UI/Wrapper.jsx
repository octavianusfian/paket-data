import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Wrapper = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  return (
    <div className="min-h-screen">
      {token && <Header />}
      <div className="p-15">{children}</div>
      {token && <Footer />}
    </div>
  );
};
