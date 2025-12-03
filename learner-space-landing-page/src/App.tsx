import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact/ContactCard";
import PrivacyPolicyPage from "./components/Home/PrivacyAndPolicy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyandpolicy" element={<PrivacyPolicyPage />} />
      </Routes>
    </>
  );
}

export default App;
