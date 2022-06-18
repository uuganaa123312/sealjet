import React, { useState } from "react";
import Header from "./Header";
import MobileCat from "./MobileCat";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-[Nunito]">
      <Header setOpen={setOpen} open={open} />
      <MobileCat />
      <div className="sm:mt-[58px]">{children}</div>
      <Sidebar open={open} />
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
