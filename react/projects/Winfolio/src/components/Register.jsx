import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, ANON_KEY } from '../Auth/keys';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const supabase = createClient(SUPABASE_URL, ANON_KEY);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    // validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Enter your password'),
      confirmPassword: Yup.string()
        .required('Enter confirm password')
        .oneOf(
          [Yup.ref('password'), null],
          'Password and Confirm Password must match'
        ),
    }),

    // submit form

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const registerHandle = async (e) => {
    e.preventDefault();
    // try {
    //   const { data, error } = await supabase.auth.signUp({
    //     email: formik.values.email,
    //     password: formik.values.password,
    //   });
    //   console.log(data, error);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  console.log(formik.errors);

  return (
    <div>
      <div className='flex items-left justify-center  '>
        <div className='bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md  border-2 text-left'>
          <h2 className='text-2xl text-center font-bold mb-6'>Signup</h2>
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
                value={formik.values.password}
                type='password'
                id='password'
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              <span id='passwordError' className='text-red-500 text-sm '>
                {' '}
                {formik.touched.password && formik.errors.password}
              </span>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='confirmPassword'
                className='block text-gray-700 text-sm font-bold mb-2 text-left'
              >
                Confirm Password
              </label>
              <input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              <span id='confirmPasswordError' className='text-red-500 text-sm '>
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword}
              </span>
            </div>

            <button
              type='submit'
              id='submitButton'
              className='bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end'
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
