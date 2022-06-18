import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./Home";
import Product from "./Product";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Layout>
  );
};

export default React.memo(Router);
