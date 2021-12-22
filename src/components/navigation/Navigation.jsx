import React from "react";
import Sidemenu from "./partials/Sidemenu";
import Navbar from "./partials/Navbar";
import MenuBtn from "./partials/MenuBtn";
import { useAppContext } from "../../context";

const Navigation = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();

  return (
    <div className="nav-container">
      <MenuBtn isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Navbar />
      <Sidemenu isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Navigation;
