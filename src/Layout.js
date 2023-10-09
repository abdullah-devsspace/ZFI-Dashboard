import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            {/* Header component */}
            <Header />
            <div class="container-fluid">
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
