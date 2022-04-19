import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Data from "./context/fetchdata";
import { makeServer } from "./server";
import "./index.css"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Data>
      <App />
    </Data>
  </React.StrictMode>,
  document.getElementById("root")
);
