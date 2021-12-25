import React, { useContext, useState, useEffect } from "react";
import data from "./data.json";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentDestination, setCurrentDestination] = useState("");
  const [currentCrew, setCurrentCrew] = useState("");
  const [currentTechnology, setCurrentTechnology] = useState("");

  useEffect(() => {
    const defaultDestination = data.destinations[0].name;
    const defaultCrew = data.crew[0].name;
    const defaultTechnology = data.technology[0].name;

    setCurrentDestination(defaultDestination);
    setCurrentCrew(defaultCrew);
    setCurrentTechnology(defaultTechnology);
  }, []);

  const toggleMenu = bool => {
    setIsMenuOpen(bool);
  };

  const changePage = e => {
    const page = e.currentTarget.getAttribute("name");
    setCurrentPage(page);
  };

  const changeDestination = e => {
    const newDestination = e.currentTarget.getAttribute("name");
    setCurrentDestination(newDestination);
  };

  const changeCrew = e => {
    const newCrew = e.currentTarget.getAttribute("name");
    setCurrentCrew(newCrew);
  };

  const changeTechnology = e => {
    console.log(`e.currentTarget`, e.currentTarget);
    const newTech = e.currentTarget.getAttribute("name");
    setCurrentTechnology(newTech);
  };

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        currentPage,
        changePage,
        currentDestination,
        changeDestination,
        currentCrew,
        changeCrew,
        currentTechnology,
        changeTechnology,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
