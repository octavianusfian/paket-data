import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import { useNavigate } from "react-router-dom";
export const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (values) => {
    console.log("Success:", values);

    dispatch(
      login({
        user: values.username,
        token: "fake-jwt-token",
      }),
    );

    navigate("/dashboard");
  };

  return (
    <Card style={{ width: 500 }}>
      <h1 className="text-2xl font-bold text-center mb-10 border-b-2 pb-2">
        Tekomtel
      </h1>
      <h1 className="text-xl font-bold text-center mb-10">Login</h1>
      <Form name="login" initialValues={{ remember: true }} onFinish={onLogin}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
