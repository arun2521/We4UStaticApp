import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="logo_div">
          <h1>We4U</h1>
        </div>
        <div className="footer_text">
          <div className="text_1">
            <div>
              <h1>Community</h1>
              <p>Tutorials</p>
              <p>Documentation</p>
              <p>Forum</p>
              <p>Translations</p>
            </div>
            <div>
              <h1>Services</h1>
              <p>Tutorials</p>
              <p>Documentation</p>
              <p>Forum</p>
              <p>Translations</p>
            </div>
            <div>
              <h1>About us</h1>
              <p>Tutorials</p>
              <p>Documentation</p>
              <p>Forum</p>
              <p>Translations</p>
            </div>
          </div>
          <div>
            <p style={{ marginTop: "5rem" }}>
              We4U is a suite of open source business apps that cover all your
              company needs: CRM, eCommerce, accounting, inventory, point of
              sale, project management, etc. Odoo's unique value proposition is
              to be at the same time very easy to use and fully integrated.
            </p>
          </div>
        </div>
      </div>
      <div className="footer_text_content">
        <p>Website made with We4U</p>
      </div>
    </>
  );
};

export default Footer;
