import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { makeServer } from "./server.js";

if (process.env.NODE_ENV === "development") {
  console.log("process.ENV.NODE_ENV :")
  console.log(process.env.NODE_ENV)

  makeServer({ environment: "development" });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
