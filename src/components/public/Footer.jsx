import React from "react";
import "./Css/FooterStyle.css"
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const footerDetails = {
    year: new Date().getFullYear(),
    nameproject: "GlampZone"
  }
  return (
    <footer>
      <div className="footer-left">
        <img src={logo} alt="Logo" className="logo" />
        <p>@{footerDetails.year} {footerDetails.nameproject}, Project</p>
        <p className="separator">|</p>
        <p><Link className="Links">Privacidad</Link></p>
        <p className="separator">|</p>
        <p><Link className="Links">Términos y Condiciones</Link></p>
      </div>
      <div className="footer-right">
      <FaFacebook className="social-icon" />
      <FaInstagram className="social-icon" />
      <FaTwitter className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;
