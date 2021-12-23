import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";
import logo from "./assets/shared/logo.svg";

import { useAppContext } from "./context";
const App = () => {
  const { currentPage } = useAppContext();
  return (
    <div className="App">
      <img id="logo" src={logo} alt="Star shaped logo" />
      <Navigation />
      <div id="page-container">
        {currentPage === "home" ? (
          <Home />
        ) : currentPage === "destination" ? (
          <Destination />
        ) : currentPage === "crew" ? (
          <Crew />
        ) : (
          <Technology />
        )}
      </div>
    </div>
  );
};

export default App;
