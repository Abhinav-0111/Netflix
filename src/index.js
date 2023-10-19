import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap-scss/bootstrap.scss";
import "./App.scss";
import ContextState from "./component/context/ContextState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <ContextState>
            <App />
        </ContextState>
    </>
);
