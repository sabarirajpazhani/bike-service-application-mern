import React, { useState } from 'react';
import Icon from '../../images/logo1.png'; // Importing the logo image for the navbar.
import { Link } from 'react-router-dom'; // Importing Link for navigation between routes.
import { GiHamburgerMenu } from 'react-icons/gi'; // Importing the hamburger menu icon for mobile view.

function Navbar() {                            
  const [open, setOpen] = useState(false); // Declare a state variable 'open' with initial value 'false' to toggle mobile menu.
  console.log(open); // Logs the current state of 'open' to the console (for debugging).

  return (
    <div className='max-w-screen overflow-x-hidden font-poppins'>
      {/* Navbar container */}
      <nav className='bg-gray-900 fixed px-2 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400'>
        {/* Desktop navigation */}
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2'>
          <Link to='/' className='flex items-center'>
            {/* Logo and site name */}
            <img 
              src={Icon} 
              alt='icon' 
              className='hidden sm:block sm:w-[55px] sm:h-[55px]' 
            />
            <span className='ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl'>
              BikeBlitz
            </span>
          </Link>

          <div className='flex ml-[50%]'>
            {/* Desktop menu items */}
            <ul className='sm:flex justify-right hidden'>
              <li className='p-2 mr-4 text-white hover:text-blue-400 cursor-pointer'>
                <Link to="/">Home</Link>
              </li>
              <li className='p-2 mr-4 text-white hover:text-blue-400 cursor-pointer'>
                <Link to="/about">About</Link>
              </li>
              <li className='p-2 mr-4 text-white hover:text-blue-400 cursor-pointer'>
                <Link to="/services">Services</Link>
              </li>
              <li className='p-2 text-white hover:text-blue-400 cursor-pointer'>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                {/* Profile icon */}
                <Link to="/profile">
                  <img 
                    src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" 
                    alt="profileimg" 
                    className='w-12 ml-[40%] mt-[-1%]  cursor-pointer' 
                  />
                </Link>
              </li>
            </ul>
          </div>
          
          <div className='flex'>
            
            {/* Hamburger menu button for mobile view */}
            <button 
              onClick={() => setOpen(!open)} 
              className='sm:hidden block'
            >
              <GiHamburgerMenu size={30} className='mt-2 me-2 text-white/70' />
            </button>
          </div>
        </div>
        {/* Desktop navigation end */}

        {/* Mobile menu */}
        <div className={`${open ? null : "hidden"} h-[13rem]`}>
          <ul>
            {/* Mobile menu items */}
            <li className='text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4 pt-6'>
              <Link to='/'>Home</Link>
            </li>
            <li className='text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4'>
              <Link to='/about'>About</Link>
            </li>
            <li className='text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
