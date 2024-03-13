import React from 'react';
import { Link } from 'react-router-dom';

export const OuterHeader = () => {
  return (
    <div className=' text-center  py-4'>
      <span className='self-center whitespace-nowrap underline font-semibold dark:text-white text-2xl'>
        <Link to='/login' className='cursor-pointer'>
          Winfolio
        </Link>
      </span>
    </div>
  );
};
