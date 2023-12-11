import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MobileMenuProvider from "./MobileMenuProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MobileMenuProvider>
      <App />
    </MobileMenuProvider>
  </React.StrictMode>
);
