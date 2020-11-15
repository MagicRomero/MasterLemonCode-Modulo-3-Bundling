import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/index.css";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
