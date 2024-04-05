import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UsersProvider>
);
