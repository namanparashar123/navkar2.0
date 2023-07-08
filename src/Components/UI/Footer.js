import React from "react";
import footerLogo from "../images/Logo_footer.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import fblogo from "../images/fblogo.png"
import whatspplogo from "../images/whatspplogo.png"
import instalogo from "../images/instalogo.png"
import gmailLogo from "../images/gmailLogo.png"

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid sec5 line footercol">
      <div className="row top">
        <div className="col-sm-5 input">
          <a href="/">
            <img src={footerLogo} alt="logo" />
            <h1>Estd. 2020</h1>
          </a>
        </div>
        <div className="col-sm-3 links">
          <h5>Our Company</h5>
          <ul className="footer_nav">
            <li>
              <a href="/About">About Us</a>
            </li>
            <li>
              <a href="/Careers">Careers</a>
            </li>
            <li>
              <a href="/contact" >Contact Us </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 footerIcons">
           <a href="https://www.facebook.com/profile.php?id=100080565692833&mibextid=ZbWKwL"><img style = {{width:'35px', height: '35px', margin:'15px'}} src={fblogo} alt="logo" /></a>
           <a href="https://www.fb.com"><img style = {{width:'35px', height: '35px', margin:'15px'}} src={whatspplogo} alt="logo" /></a>
            <a href="https://instagram.com/navkarcourier?igshid=MzRlODBiNWFlZA=="><img style = {{width:'35px', height: '35px', margin:'15px'}} src={instalogo} alt="logo" /></a>
            <a href=""><img style = {{width:'40px', height: '30px', margin:'15px'}} src={gmailLogo} alt="logo" /></a>
        </div>
        </div>

        <div className="footer">
          {`Copyright © Navkar Courier Ltd. ${year} | All Rights Reserved | Designed and developed by Naman P.`}
        </div>
    </footer>
  );
};

export default Footer;
