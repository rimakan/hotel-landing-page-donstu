import React, { type JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStore } from '../../../hooks/useStore';

const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const authState = useStore(({ auth }) => auth.loggedState);

  if (authState === 'not-logged') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children as JSX.Element;
};

export default ProtectedRoute;
