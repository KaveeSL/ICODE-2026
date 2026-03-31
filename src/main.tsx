import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "./App";
import ProgrammePage from "./ProgrammePage.tsx";
import GovernancePage from "./GovernancePage";
import CallForPapersPage from "./CallForPapersPage";
import RegistrationPage from "./RegistrationPage";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import "./index.css";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/programme" element={<ProgrammePage />} />
        <Route path="/governance" element={<GovernancePage />} />
        <Route path="/call-for-papers" element={<CallForPapersPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      <WhatsAppFloat />
    </BrowserRouter>
  </React.StrictMode>
);

