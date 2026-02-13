import { Navigate } from 'react-router-dom';
import { authAPI } from '../api/auth';

const ProtectedRoute = ({ children, requireAuth = false, requireGuest = false }) => {
  const isAuthenticated = authAPI.isAuthenticated();

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireGuest && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // If all pass, render the pages
  return children;
};

export default ProtectedRoute;
