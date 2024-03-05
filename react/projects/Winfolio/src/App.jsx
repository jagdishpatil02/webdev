import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/home' element={<Home />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
