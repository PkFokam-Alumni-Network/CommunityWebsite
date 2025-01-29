import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/UserDashboard";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import AlumniDetails from "./components/AlumniDetailsCard";
import SplashScreen from "./components/SplashScreen";
import AlumniDirectory from "./pages/AlumniDirectory";
import Announcements from "./pages/Announcements";
import OnboardingPage from "./pages/Onboarding";
import Events from "./pages/Events";
import { initializeAuth } from "./features/authSlice";
import "./App.css";
import AlumniSettings from "./components/AlumniProfile";
import EditProfile from "./components/AlumiEditProfile";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [firstName, setFirstName] = useState("");
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isUserDataExists = useSelector((state) => state.auth.isUserDataExists);

  useEffect(() => {
    if (isUserDataExists) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      setFirstName(userData.first_name);
    }
  }, [isUserDataExists]);

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <MainLayout>
              <Home />
            </MainLayout>
          )
        }
      />
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <AuthLayout>
              <Login />
            </AuthLayout>
          )
        }
      />

      {/* Protected routes */}
      {isAuthenticated && showSplash ? (
        <Route
          path="/dashboard"
          element={
            <SplashScreen
              onComplete={handleSplashComplete}
              username={firstName}
            />
          }
        />
      ) : (
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
          }
        >
          {/* Nested routes */}
          <Route path="alumni-directory" element={<AlumniDirectory />} />
          <Route path="events" element={<Events />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="settings" element={<AlumniSettings />} />
          <Route path="resources" element={<OnboardingPage />} />
        </Route>
      )}

      <Route
        path="/alumni/details"
        element={
          isAuthenticated ? <AlumniDetails /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/edit-profile"
        element={
          isAuthenticated ? <EditProfile /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;
