import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Packages } from "../pages/Packages";
import { Wrapper } from "../components/UI/Wrapper";
import { Fragment } from "react";
import PackageDetail from "../pages/PackageDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Login />} />
          <Fragment>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/package/:id" element={<PackageDetail />} />
          </Fragment>
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default AppRoutes;
