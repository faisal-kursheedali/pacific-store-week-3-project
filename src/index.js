import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Data from "./context/fetchdata";
import {AuthProvider} from "./context/auth-context";
import { makeServer } from "./server";
import "./index.css"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <Data>
      <App />
    </Data>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
