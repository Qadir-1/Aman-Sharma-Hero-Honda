/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";

//Login Modal

const NavBar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="left">
          <img src={logo} />
        </div>
        <div className="right">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
};

export default NavBar;
