import React from "react";
import { Logo } from "../../assets/images/icons/Icons";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="../../../public/index.html">
        <Logo />
        Dashboard Kit
      </a>
      <p>example</p>
      <p>example2</p>
    </div>
  );
};

export default Sidebar;
