import React from "react";
import { Routes, Route } from "react-router-dom";

import { useSealState } from "../pages/Context";

import Layout from "../components/Layout";
import Home from "./Home";
import Material from "./Material";
import MaterialDetail from "../components/MaterialDetail";
import Product from "./Product";
import ProductDetail from "../components/ProductDetail";
import News from "./News";
import NewsDetail from "../components/NewsDetail";
import Order from "./Order";
import Login from "./Login";
import AdminHome from "./Admin/Home";

const Router = () => {
  const { state } = useSealState();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/material"
        element={
          <Layout>
            <Material />
          </Layout>
        }
      />
      <Route
        path="/material/:id"
        element={
          <Layout>
            <MaterialDetail />
          </Layout>
        }
      />
      <Route
        path="/product"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Layout>
            <ProductDetail />
          </Layout>
        }
      />
      <Route
        path="/news"
        element={
          <Layout>
            <News />
          </Layout>
        }
      />
      <Route
        path="/news/:id"
        element={
          <Layout>
            <NewsDetail />
          </Layout>
        }
      />
      <Route
        path="/order"
        element={
          <Layout>
            <Order />
          </Layout>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          state.loggedIn ? (
            <AdminHome />
          ) : (
            <div className="text-2xl text-center py-10 text-gray-800">
              Таны хайсан хуудас олдсонгүй.
            </div>
          )
        }
      />
    </Routes>
  );
};

export default React.memo(Router);
