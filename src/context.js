import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const [currentDestination, setCurrentDestination] = useState("moon");

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

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        currentPage,
        changePage,
        currentDestination,
        changeDestination,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
