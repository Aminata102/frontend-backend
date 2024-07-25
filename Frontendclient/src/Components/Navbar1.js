import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import y2 from '../images/y2.png';

const Navbar = () => {
  return (
    <nav className=' shadow bg-white px-4 py-3 flex justify-between ml-64'>
      <div className=' flex items-center text-xl'>
        
        <span className=' font-semibold'>Dashboard</span>
      </div>
      <div className='flex items-center gap-x-5'>
            <div className='relative md:w-65'>
                <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                    <button className='p-1 focus:outline-none  md:text-black'><FaSearch/></button></span>
                <input type='text' className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block'/>
            </div>
            <div className=''>
                <IoIosNotificationsOutline className='  cursor-pointer'/>
            </div>
            <div className='relative'>
              <button className='text-black group'>
                <img src={y2} className='w-6 h-6 mt-1'/>
                <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                  <ul className='py-2 text-sm text-gray-950'>
                    <li><a href=''>Pofile</a></li>
                    <li><a href=''>Setting</a></li>
                    <li><a href=''>Log Out</a></li>
                  </ul>
                </div>
              </button>
            </div>
           <div>
            <FiLogOut className=' me-4  h-6 cursor-pointer'></FiLogOut>
           </div>
      </div>
  
    </nav>
  )
}

export default Navbar;
