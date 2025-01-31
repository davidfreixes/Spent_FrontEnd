import { jwtDecode } from "jwt-decode"; // Necesitas instalarlo con: npm install jwt-decode
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import Contact from "./pages/Contact";
import EventCreate from "./pages/EventCreate";
import EventPage from "./pages/EventPage";
import SportsPage from "./pages/SportsPage";
import UserProfile from "./pages/UserProfile";
import RegisterSuccess from "./pages/verificationPages/RegisterSuccess";
import VerifyFail from "./pages/verificationPages/VerifyFail";
import VerifySuccess from "./pages/verificationPages/VerifySuccess";

function Router() {
  const getToken = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return null;

    try {
      const decoded = jwtDecode(token);
      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("accessToken");
        return null;
      }
      return token;
    } catch (error) {
      localStorage.removeItem("accessToken");
      return null;
    }
  };

  const [token, setToken] = useState(getToken());

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(getToken());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (token)
    return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:username" element={<UserProfile />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/events/:id" element={<EventPage />} />
        <Route path="/event/create" element={<EventCreate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/verify-success" element={<VerifySuccess />} />
      <Route path="/verify-fail" element={<VerifyFail />} />
    </Routes>
  );
}

export default Router;
