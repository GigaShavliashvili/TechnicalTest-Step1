import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { GithubProvider } from "./Context/fetchData";
const root = createRoot(document.getElementById("root"));
root.render(
  <GithubProvider>
    <App />
  </GithubProvider>
);
