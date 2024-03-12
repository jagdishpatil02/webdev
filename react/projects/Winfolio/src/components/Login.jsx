import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, ANON_KEY } from '../Auth/keys';
import { useNavigate } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import Register from './Register';
import { OuterHeader } from './OuterHeader';
const Login = () => {
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    // validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Enter your password'),
    }),
  });
  const supabase = createClient(SUPABASE_URL, ANON_KEY);

  const loginHandle = async (e) => {
    e.preventDefault();

    if (Object.keys(formik.errors).length == 0) {
      try {
        isLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formik.values.email,
          password: formik.values.password,
        });
        if (data?.user?.role == 'authenticated') {
          console.log(data?.user);
          localStorage.setItem('authenticated', true);
          localStorage.setItem('userId', data.user.id);
          localStorage.setItem('email', data.user.email);

          navigate('/home');
        }
        toast.error(error?.message);
      } catch (error) {
        isLoading(false);

        console.log('error', error);
        localStorage.setItem('authenticated', false);
      } finally {
        isLoading(false);
      }
    }
  };

  const gotoRegister = (route) => {
    navigate(route);
  };

  return (
    <div className=' py-16'>
      <OuterHeader></OuterHeader>
      <div className='flex items-center justify-center '>
        <div className='bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md  border-2 text-left'>
          <h2 className='text-2xl text-center font-bold mb-6'>Login</h2>
          <form id='registerhtmlForm' onSubmit={loginHandle}>
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
              <span id='emailError' className='text-red-500 text-sm '>
                {formik.touched.email && formik.errors.email}
              </span>
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='block text-gray-700 text-sm font-bold mb-2 text-left'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                required
              />
              <span id='passwordError' className='text-red-500 text-sm '>
                {' '}
                {formik.touched.password && formik.errors.password}
              </span>
            </div>

            <button
              disabled={loading}
              onClick={loginHandle}
              type='submit'
              id='submitButton'
              className='bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end'
            >
              Login
            </button>
          </form>
          <p className='mt-2'>
            Don&apos;t have an account yet?{' '}
            <a
              className='text-blue-500 underline cursor-pointer block'
              onClick={() => gotoRegister('/register')}
            >
              Click here to create one.
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
