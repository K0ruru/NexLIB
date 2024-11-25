import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./app.scss";

// Components
import Navbar from "./components/Navbar/navbar";

// Pages
import LoginPage from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar className="navbar" />
      <div className="outlet-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
