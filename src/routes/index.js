import React from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import HeaderNav from "../components/header";
import FooterNav from "../components/footer";
import HomePage from "../pages/HomePage";

const { Content } = Layout;

function PublicRouter() {
  return (
    <Layout>
      <HeaderNav />
      <Content>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </Content>
      <FooterNav />
    </Layout>
  );
}

export default PublicRouter;
