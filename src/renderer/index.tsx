import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, HashRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
