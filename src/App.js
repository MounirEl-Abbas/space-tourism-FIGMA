import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import logo from "./assets/shared/logo.svg";
const App = () => {
  return (
    <div className="App">
      <img id="logo" src={logo} alt="Star shaped logo" />
      <Navigation />
      <div id="page-container">
        <Home />
      </div>
    </div>
  );
};

export default App;
