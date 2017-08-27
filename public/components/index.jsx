import React from "react";
import ReactDOM from "react-dom";

import IndexLayout from "./index-layout.jsx";

ReactDOM.render(
  pug `
    IndexLayout
  `,
  document.getElementById("react")
);
