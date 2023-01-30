import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 copyright-sec">
            <p>Copyright © 2021 Company - All rights reserved</p>
          </div> 
          <div className="col-sm-6 social-icon-sec">
            <Link to="#">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-instagram"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-youtube"></i>
            </Link>
            <Link to="#">
              <i className="fa fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
