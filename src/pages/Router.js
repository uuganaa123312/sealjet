import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./Home";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default React.memo(Router);
