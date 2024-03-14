import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { GlobalModal } from "./context/ModalContext";
import "@patternfly/react-core/dist/styles/base.css";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalModal>
      <App />
    </GlobalModal>
  </React.StrictMode>
);
