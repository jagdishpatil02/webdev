import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const ShowAchievements = lazy(() => import('./components/Achievements'));
const VerifyEmail = lazy(() => import('./components/Verifyemail'));
const ForgotPassword = lazy(() => import('./components/ResetPassword'));
const ChangePassword = lazy(() => import('./components/ChangePassword'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/verify-email' element={<VerifyEmail />} />

            <Route path='/' element={<Login />} />

            <Route element={<PrivateRoutes />}>
              <Route path='/home' element={<Home />} />
              <Route path='/show-achievements' element={<ShowAchievements />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/reset-password' element={<ForgotPassword />} />
            <Route path='/change-password/*' element={<ChangePassword />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
