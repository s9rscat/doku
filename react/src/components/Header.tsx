import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MateWrite from "../assets/img/mate-write.png";
import MateLogo from "../assets/img/mate-logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <img src={MateLogo} alt="Mate logo" className="logo" />
        <img src={MateWrite} alt="Mate Write" className="logo-writing" />
      </div>




      <button className="header-info">
        <FontAwesomeIcon icon={faCircleInfo} size="2xl" />
      </button>
    </header>
  );
}

export default Header;
