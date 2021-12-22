import React from "react";
import Hamburger from "../../../assets/shared/icon-hamburger.svg";
import Cross from "../../../assets/shared/icon-close.svg";

const MenuBtn = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div id="menu-btn">
      {isMenuOpen ? (
        <img src={Cross} alt="" onClick={() => toggleMenu(false)} />
      ) : (
        <img src={Hamburger} alt="" onClick={() => toggleMenu(true)} />
      )}
    </div>
  );
};

export default MenuBtn;
