// src/components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Render children if authenticated
  return children;
};

export default ProtectedRoute;
