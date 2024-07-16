import React from 'react'
const Navbar = () => {
  return (
    <div>
      <nav className='bg-gray-900 text-white flex flex-row justify-between p-5'>
        <div className="logo  w-10 flex flex-row  ">
            <img className='rounded-[100px] w-18 h-13 ' src="public/logo.svg" alt="" />
            <h2 className='text-slate-300 text-2xl ml-5'>TaskTrack</h2>
       
        <ul className='flex flex-row ml-[4rem] text-lg'>
            <li className='ml-5'>Home</li>
            <li className='ml-5'>About</li>
            <li className='ml-5 '>Contact </li>
            <li className='ml-5'>Task</li>
            <li className='ml-5'>Pending</li>
        </ul>
        </div>
        <div className="auth mr-1">
            <button type='button' className='mr-5 text-black bg-blue-400 text-center  w-[90px] h-[40px] rounded-xl text-[18px] font-bold '>Sign Up</button>
            <button type='button' className='mr-3 text-black bg-blue-400 text-center  w-[90px] h-[40px] rounded-xl text-[18px] font-bold'>Log In</button>
        </div>
       
       
      </nav>
    </div>
  )
}

export default Navbar
