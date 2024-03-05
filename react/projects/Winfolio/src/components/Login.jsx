import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, ANON_KEY } from '../Auth/keys';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState('');
  const navigate = useNavigate();

  const supabase = createClient(SUPABASE_URL, ANON_KEY);

  const registerHandle = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log(data, error);
      setAuthenticated(true);
      localStorage.setItem('authenticated', true);
      navigate('/home');
    } catch (error) {
      localStorage.setItem('authenticated', false);
      console.log(error);
    }
  };

  return (
    <div>
      <div className='flex items-center justify-center  '>
        <div className='bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md  border-2'>
          <h2 className='text-2xl text-center font-bold mb-6'>Login</h2>
          <form id='registerhtmlForm' onSubmit={registerHandle}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-bold mb-2 text-left'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
              <span
                id='emailError'
                className='text-red-500 text-sm hidden'
              ></span>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='block text-gray-700 text-sm font-bold mb-2 text-left'
              >
                Password
              </label>
              <input
                value={password}
                type='password'
                id='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
              <span
                id='passwordError'
                className='text-red-500 text-sm hidden'
              ></span>
            </div>
            {/* <div className='mb-6'>
              <label
                htmlFor='confirmPassword'
                className='block text-gray-700 text-sm font-bold mb-2'
              >
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
              <span
                id='confirmPasswordError'
                className='text-red-500 text-sm hidden'
              ></span>
            </div> */}

            <button
              type='submit'
              id='submitButton'
              className='bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
