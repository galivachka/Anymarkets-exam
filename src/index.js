import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/fonts.scss";
import "./index.css";
import App from "./App";
import { AuthUserContext } from "./utils/auth";
import { Alert } from "./components/alert/Alert";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Alert>
    <AuthUserContext>
      <App />
    </AuthUserContext>
  </Alert>
);
