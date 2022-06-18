import React from "react";

const Home = () => {
  return (
    <div>
      <div className="sm:hidden">mobileHome</div>
      <div className="hidden sm:block">desktopHome</div>
    </div>
  );
};

export default React.memo(Home);
