import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import "./lib/fontawesome";
import "./styles/global.css";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
