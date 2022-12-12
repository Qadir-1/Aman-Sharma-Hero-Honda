/** @format */

import React, { useState } from "react";
import logo from "../Images/rrh-logo 3.png";

const NavBar = () => {
  const [slide, setSlide] = useState(false);
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

      {slide ? (
        <div className="upBar" id="upBar" style={{top : '200px'}}>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
        </div>
      ) : (
        <div className="upBar" id="upBar" style={{top : '-200px'}}>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
          <div>Issue Promocode</div>
        </div>
      )}
    </>
  );
};

export default NavBar;
