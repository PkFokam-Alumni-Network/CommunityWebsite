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
import { initializeAuth } from "./features/authSlice";

import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const firstName = useSelector((state) => state.auth.user?.firstName);

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
              username={firstName || "Guest"}
            />
          }
        />
      ) : (
        // Dashboard page after splash screen
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
      )}

      <Route
        path="/alumni/details"
        element={
          isAuthenticated ? <AlumniDetails /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;
