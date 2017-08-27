import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import IndexLayout from "./index-layout.jsx";

ReactDOM.render(
  pug `
    BrowserRouter
      IndexLayout
  `,
  document.getElementById("react")
);
