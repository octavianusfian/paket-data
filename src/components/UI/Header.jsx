import { Button } from "antd";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/"); // Redirect to login page after logout
  };
  return (
    <header className="bg-red-800 text-white py-4 px-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tekomtel</h1>
        <Link to="/packages" className="text-white hover:text-gray-300">
          List Packages
        </Link>
        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
