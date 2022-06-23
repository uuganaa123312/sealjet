import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-[Nunito] max-w-7xl mx-auto">
      <Header setOpen={setOpen} open={open} />
      {children}
      <Sidebar open={open} setOpen={setOpen} />
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
