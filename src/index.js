import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";

import "./index.css";
import App from "./App";

// react v17.0.0
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// react v18.0.0 and above
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);