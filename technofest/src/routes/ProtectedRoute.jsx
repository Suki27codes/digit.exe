import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Wraps a route so only authenticated users can access it.
 * Unauthenticated users are redirected to /login (with the original
 * path saved so we can redirect back after login).
 *
 * Optionally pass `allowedRoles` to further restrict by role.
 * e.g. <ProtectedRoute allowedRoles={['admin']}> ... </ProtectedRoute>
 */
export default function ProtectedRoute({ children, allowedRoles }) {
  const { user, role, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#800000] border-t-transparent" />
          <p className="text-sm text-gray-500 font-medium">Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // User is logged in but doesn't have the right role — redirect to their own dashboard
    const dashboardMap = {
      student: '/student',
      mentor: '/mentor',
      admin: '/admin',
      organization: '/organization',
    };
    const fallback = dashboardMap[role] ?? '/';
    return <Navigate to={fallback} replace />;
  }

  return children;
}
