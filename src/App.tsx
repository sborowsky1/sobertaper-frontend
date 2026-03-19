import ContactPage from "./pages/ContactPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import DownloadPage from "./pages/DownloadPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import WebAppPage from "./pages/WebAppPage";

export default function App() {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  if (currentPath === "/download") return <DownloadPage />;
  if (currentPath === "/webapp") return <WebAppPage />;
  if (currentPath === "/pricing") return <PricingPage />;
  if (currentPath === "/privacy") return <PrivacyPage />;
  if (currentPath === "/terms") return <TermsPage />;
  if (currentPath === "/contact") return <ContactPage />;
  if (currentPath === "/disclaimer") return <DisclaimerPage />;

  return <HomePage />;
}