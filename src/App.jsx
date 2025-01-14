import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/UserDashboard";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import AlumniCard from "./components/AlumniCard"; // Adjust the path as needed
import AlumniDetails from "./components/AlumniDetails"; // Adjust the path as needed
import { initializeAuth } from "./features/authSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/alumni"
        element={
          isAuthenticated ? <AlumniCard /> : <Navigate to="/login" replace />
        }
      />
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
