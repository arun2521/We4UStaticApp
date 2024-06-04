import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_text_1">
        <h1>
          All your <span className="gradient-text">business</span> on one{" "}
          <span className="gradient-text">platform</span>.
        </h1>
      </div>
      <div className="header_text_2">
        <h2>Simple, efficient, yet affordable!</h2>
      </div>
      <div className="header_btns">
        <h4>Start now - It's free</h4>
        <h5>Schedule a demo</h5>
      </div>
      <div className="header_footer_text">
        <h5>Imagine a vast collection of business apps at your disposal.</h5>
        <div className="inner_text_header">
        <p>Got something to improve? There is an app for that.</p>
        <p>No complexity, no cost, just a one-click install.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
