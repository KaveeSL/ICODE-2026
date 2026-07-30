import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import App from "./App";
import AbstractsPage from "./AbstractsPage";
import ProgrammePage from "./ProgrammePage.tsx";
import GovernancePage from "./GovernancePage";
import CallForPapersPage from "./CallForPapersPage";
import RegistrationPage from "./RegistrationPage";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { SiteDocumentHead } from "./components/SiteDocumentHead";
import { SiteThemeProvider } from "./context/SiteThemeProvider";
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
      <SiteThemeProvider>
        <ScrollToTopOnRouteChange />
        <SiteDocumentHead />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/programme" element={<Navigate to="/programme/day1" replace />} />
          <Route path="/programme/:daySlug" element={<ProgrammePage />} />
          <Route path="/proceedings" element={<AbstractsPage />} />
          <Route path="/abstracts" element={<Navigate to="/proceedings" replace />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/call-for-papers" element={<CallForPapersPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
        <WhatsAppFloat />
      </SiteThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
