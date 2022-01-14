import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import HeaderNav from "../components/header";
import FooterNav from "../components/footer";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";

const { Content } = Layout;

function PublicRouter() {
  return (
    <Layout>
      <HeaderNav />
      <Content>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
        </Routes>
      </Content>
      <FooterNav />
    </Layout>
  );
}

export default PublicRouter;
