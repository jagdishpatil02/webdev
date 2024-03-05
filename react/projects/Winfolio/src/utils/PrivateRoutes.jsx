import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let authToken = localStorage.getItem('authenticated');
  return authToken == 'true' ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
