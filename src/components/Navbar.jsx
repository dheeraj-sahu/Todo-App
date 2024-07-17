import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Corrected import path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className='bg-gray-900 text-white flex flex-col lg:flex-row justify-between items-center p-5'>
        <div className="logo flex items-center">
          <img className='rounded-full w-12 h-12' src="/logo.svg" alt="Logo" />
          <h2 className='text-slate-300 text-2xl ml-3'>TaskTrack</h2>
        </div>

        {/* Hamburger Icon */}
        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-white'>
            {isOpen ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
          </button>
        </div>

        {/* Navigation Menu */}
        <ul className={`lg:flex flex-col lg:flex-row lg:items-center lg:space-x-6 mt-4 lg:mt-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li className='ml-0 lg:ml-5 cursor-pointer hover:font-bold hover:text-green-400'>Home</li>
          <li className='ml-0 lg:ml-5 cursor-pointer hover:font-bold hover:text-green-400'>About</li>
          <li className='ml-0 lg:ml-5 cursor-pointer hover:font-bold hover:text-green-400'>Contact</li>
          <li className='ml-0 lg:ml-5 cursor-pointer hover:font-bold hover:text-green-400'>Task</li>
          <li className='ml-0 lg:ml-5 cursor-pointer hover:font-bold hover:text-green-400'>Pending</li>
        </ul>

        <div className="auth flex flex-col lg:flex-row lg:items-center lg:ml-auto mt-4 lg:mt-0">
          <button
            type='button'
            className='mr-0 lg:mr-2 text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full lg:w-[100px] h-10 rounded-lg text-lg font-semibold cursor-pointer mb-2 lg:mb-0'
          >
            Sign Up
          </button>
          <button
            type='button'
            className='text-white bg-green-500 hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 w-full lg:w-[100px] h-10 rounded-lg text-lg font-semibold cursor-pointer'
          >
            Log In
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
