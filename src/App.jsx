import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./app.scss";

// Components
import Navbar from "./components/Navbar/navbar";
import ProtectedRoute from "./middleware/ProtectedRoutes";

// Pages
import LoginPage from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected Route */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
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
