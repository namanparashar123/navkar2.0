import React from "react";
import "./Footer.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import fblogo from "../images/fblogo.png"
import whatspplogo from "../images/whatspplogo.png"
import instalogo from "../images/instalogo.png"
import gmailLogo from "../images/gmailLogo.png"
import chamberOfCommerce from "../images/chamberOfCommerce.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container-fluid sec5 line footercol">
      <div className="topRow">
        <div className=" flex_child footerIcons">
           <a href="https://www.facebook.com/profile.php?id=100080565692833&mibextid=ZbWKwL"><img style = {{width:'35px', height: '35px', margin:'15px'}} src={fblogo} alt="logo" /></a>
           <a href="https://wa.me/12049993472"><img style = {{width:'35px', height: '35px', margin:'15px'}} src={whatspplogo} alt="logo" /></a>
           <a href="https://instagram.com/navkarcourier?igshid=MzRlODBiNWFlZA=="><img style = {{width:'35px', height: '35px', margin:'15px'}} src={instalogo} alt="logo" /></a>
           <a href="mailto:info@navkarcourier.ca"><img style = {{width:'40px', height: '30px', margin:'15px'}} src={gmailLogo} alt="logo" /></a>
        </div>
        <div className="flex _child footer_img">
          <a href="https://winnipeg-chamber.com/" target="_blank" rel="noopener noreferrer"><img style = {{width:'200px', height: '75px', margin:'15px'}} src={chamberOfCommerce} alt="chamber_of_commerce"/></a>
        </div>
      </div>

        <div className="footer">
          {`Copyright © Navkar Courier Ltd. ${year} | All Rights Reserved | Designed and developed by Naman P. & Sahib N.`}
        </div>
    </footer>
  );
};

export default Footer;
