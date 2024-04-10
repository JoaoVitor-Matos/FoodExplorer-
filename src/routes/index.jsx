import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from '../hooks/auth';

export function Routes() {
  const { user, isUserAuthenticated } = useAuth();
  const isAdmin = user?.is_admin || false;
  const userAuthenticated = isUserAuthenticated();

  return (
    <BrowserRouter>
      {userAuthenticated ? <AppRoutes isAdmin={isAdmin} /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
