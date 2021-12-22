import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/css/main.css";
//context
import AppContextProvider from "./context";
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
