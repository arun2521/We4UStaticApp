import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav_header">
      <div>
        <h1>
          <span className="w">W</span>
          e4<span className="four">U</span>
        </h1>
      </div>
      <div className="middle_text">
        <h6>Apps</h6>
        <h6>About Us</h6>
        <h6>Contact</h6>
      </div>
      <div className="login_div">
        <h4>Login</h4>
        <h5>Sign Up</h5>
      </div>
    </div>
  );
};

export default NavBar;
