import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Verifyemail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  }, []);

  return (
    <div className='text-center py-4'>
      Your email has been verified. You will be redirected to
      <Link
        to='/login'
        className='pl-2 text-blue-500 underline cursor-pointer '
      >
        Login
      </Link>{' '}
      in few seconds
    </div>
  );
};

export default Verifyemail;
