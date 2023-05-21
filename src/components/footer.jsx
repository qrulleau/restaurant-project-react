import React from "react";
import GreyLogo from '../assets/logo/logo-grey.png';

function Footer(){
  return (
    <footer>
      <div className="t-center">
        <div className="d-flex">
          <a href="#">CGU</a>
          <a href="#">CGV</a>
          <a href="#">RGPD</a>
        </div>
        <p>© 2023 Your company name. All rights reserved.</p>
        <img src={GreyLogo} alt="" />
      </div>
    </footer>
  );
}

export default Footer;