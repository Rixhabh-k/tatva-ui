import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./docslayout.css";
import DocsSidebar from "../Sidebar/DocsSidebar";
const DocsLayout = () => {
  return (
    <div className="docs-main">
      <Navbar />
      <hr/>
      <section className="docs-layout-section" >
        <DocsSidebar />
        <Outlet />
      </section>
    </div>
  );
};

export default DocsLayout;
