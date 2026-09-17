import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./docslayout.css";
import DocsSidebar from "../Sidebar/DocsSidebar";
const DocsLayout = () => {
  return (
    <main>
      <Navbar />
      <hr />
      <section>
        <DocsSidebar />
        <Outlet />
      </section>
    </main>
  );
};

export default DocsLayout;
