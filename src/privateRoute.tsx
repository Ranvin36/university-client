import { Navigate, Outlet } from 'react-router-dom';
import { getData } from './localStorage.tsx';
import { useEffect, useState } from 'react';

const PrivateRoute = () => {
  const [authorized, setAuthorized] = useState<null | boolean>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getData();
      setAuthorized(!!token);
    };
    checkAuth();
  }, []);

  if (authorized === null) return <div>Loading...</div>; 

  return authorized ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
