import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
const PrivateRoutes = () => {
  let authToken = localStorage.getItem('authenticated');

  if (authToken == 'true') {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return <Navigate to='/login' />;
  }
};

export default PrivateRoutes;
