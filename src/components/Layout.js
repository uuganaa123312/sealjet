import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="font-[Nunito] animate-fade bg-[#E5E5E5]">
      <Header />
      {children}
      <Sidebar />
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
