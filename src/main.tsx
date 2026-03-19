import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProgrammePage from "./ProgrammePage";
import GovernancePage from "./GovernancePage";
import CallForPapersPage from "./CallForPapersPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programme" element={<ProgrammePage />} />
        <Route path="/governance" element={<GovernancePage />} />
        <Route path="/call-for-papers" element={<CallForPapersPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

