import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/App.scss";
import NiceModal from "@ebay/nice-modal-react";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
    <React.StrictMode>
      <NiceModal.Provider>
        <App />
      </NiceModal.Provider>
    </React.StrictMode>
);
