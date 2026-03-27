import { useSelector } from "react-redux";

export const GetUserLogin = () => {
  const userLogin = useSelector((state) => state.auth.user);
  return userLogin;
};
