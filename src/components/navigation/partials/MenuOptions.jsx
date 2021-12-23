import React from "react";
import { useAppContext } from "../../../context";

const MenuOptions = () => {
  const { currentPage, changePage } = useAppContext();

  return (
    <ul>
      <li
        className={`${currentPage === "home" ? "current-page" : ""}`}
        name="home"
        onClick={e => changePage(e)}>
        <span>00</span>Home
      </li>

      <li
        className={`${currentPage === "destination" ? "current-page" : ""}`}
        name="destination"
        onClick={e => changePage(e)}>
        {" "}
        <span>01</span>Destination
      </li>

      <li
        className={`${currentPage === "crew" ? "current-page" : ""}`}
        name="crew"
        onClick={e => changePage(e)}>
        {" "}
        <span>02</span>Crew
      </li>

      <li
        className={`${currentPage === "technology" ? "current-page" : ""}`}
        name="technology"
        onClick={e => changePage(e)}>
        {" "}
        <span>03</span>Technology
      </li>
    </ul>
  );
};

export default MenuOptions;
