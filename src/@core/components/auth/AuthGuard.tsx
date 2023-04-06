// ** React Imports
import { ReactNode, ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ** Next Import

// ** Hooks Import
import { useAuth } from "src/hooks/useAuth";

interface AuthGuardProps {
  children: ReactNode;
  fallback: ReactElement | null;
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props;
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(
    () => {
      if (auth.user === null && !window.localStorage.getItem("userData")) {
        if (location.pathname !== "/") {
          navigate(`/login?returnUrl=${location.pathname}`);
        } else {
          navigate("/login");
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (auth.loading || auth.user === null) {
    return fallback;
  }

  return <>{children}</>;
};

export default AuthGuard;
