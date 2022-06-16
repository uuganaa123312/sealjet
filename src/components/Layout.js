import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FooterMenu from "./FooterMenu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  console.log("asd");
  return (
    <div>
      <Header />
      <div className="mt-[58px]">{children}</div>
      <Sidebar />
      <FooterMenu />
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
