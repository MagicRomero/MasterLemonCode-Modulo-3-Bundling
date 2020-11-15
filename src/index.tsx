import * as React from "react";
import { render } from "react-dom";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons/";
import App from "./App";
import "./styles/index.css";

library.add(faSun);
library.add(faMoon);

dom.watch();

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
