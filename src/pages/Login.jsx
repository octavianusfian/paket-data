import { Button, Card, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { FormLogin } from "../features/auth/FormLogin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    navigate(token ? "/dashboard" : "/");
  }, [token, navigate]);
  return (
    <div className="flex items-center justify-center h-full">
      <FormLogin />
    </div>
  );
};
