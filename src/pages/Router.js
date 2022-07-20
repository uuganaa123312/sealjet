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
import AdminLayout from "./Admin/Layout";

import AdminOrder from "../components/Admin/Order";
import AdminMaterial from "../components/Admin/Material";
import AdminNews from "../components/Admin/News";
import AdminProduct from "../components/Admin/Product";
import AdminSetting from "../components/Admin/Setting";

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
        path="/admin/order"
        element={
          state.loggedIn && (
            <AdminLayout>
              <AdminOrder />
            </AdminLayout>
          )
        }
      />
      <Route
        path="/admin/product"
        element={
          state.loggedIn && (
            <AdminLayout>
              <AdminProduct />
            </AdminLayout>
          )
        }
      />
      <Route
        path="/admin/news"
        element={
          state.loggedIn && (
            <AdminLayout>
              <AdminNews />
            </AdminLayout>
          )
        }
      />
      <Route
        path="/admin/material"
        element={
          state.loggedIn && (
            <AdminLayout>
              <AdminMaterial />
            </AdminLayout>
          )
        }
      />
      <Route
        path="/admin/setting"
        element={
          state.loggedIn && (
            <AdminLayout>
              <AdminSetting />
            </AdminLayout>
          )
        }
      />
    </Routes>
  );
};

export default React.memo(Router);
