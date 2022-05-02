import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import TabPanel from "./TabPanel";

const Layout: FC<any> = ({ children }) => {
  return (
    <div className="app__root">
      <Header />
      <main className="fit">
        <TabPanel type="md" />
        <div className="container-xl px-3 px-md-4 px-lg-5">
          <div className="Layout Layout--flowRow-until-md Layout--sidebarPosition-start Layout--sidebarPosition-flowRow-start">
            <SideBar className="Layout-sidebar" />
            <div className="Layout-main">
              <TabPanel />
              <div>{children}</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
