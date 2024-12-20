import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import AlumniDetails from './components/AlumniDetails';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
      />
      <Route
        path="/alumni-details"
        element={
          <MainLayout>
            <AlumniDetails />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
