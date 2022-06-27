import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "../components/ProductDetail";
import News from "./News";
import NewsDetail from "../components/NewsDetail";
import Order from "./Order";

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Layout>
  );
};

export default React.memo(Router);
