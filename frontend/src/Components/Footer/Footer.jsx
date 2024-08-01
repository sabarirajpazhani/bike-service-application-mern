import React from 'react';
import { Link } from 'react-router-dom';  // Imports the Link component from react-router-dom for navigating between different routes in the application
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';  // Imports specific social media icon components from the react-icons/fa package to be used in the footer for social media links
import Icon from '../../images/logo1.png';

function Footer() {
  return (
    <div className='overflow-x-hidden max-w-screen font-poppins'>
        {/* Footer top Section */}
        <div className='sm:flex justify-between py-10 px-8 grid bg-gray-900'>
            {/* Footer logo and address */}
            <div className='text-white'>
                {/* Logo and company name link */}
                <Link to='/' className='flex items-center'> 
                    <img 
                        src={Icon} 
                        alt='icon' 
                        className='hidden sm:block sm:w-[55px] sm:-h-[55px]' 
                    />
                    <span className='ml-2 mt-2 sm:mt-0 text-blue-500 font-semibold text-xl'>
                        BikeBlitz
                    </span>
                </Link>
                {/* Company address */}
                <p className='text-justify'>No: 12, W Power House Rd, near to Power, Varuthiangara Palayam, Tatabad,</p>
                <p className='text-justify'>Coimbatore, Tamil Nadu 641012</p>
                
                {/* Social media icons */}
                <div className='flex md:w-[75%] justify-between my-6 text-blue-200'>
                    {/* Facebook icon */}
                    <FaFacebookSquare size={30} className='cursor-pointer' />
                    {/* Instagram icon */}
                    <FaInstagram size={30} className='cursor-pointer'/>
                    {/* Twitter icon */}
                    <FaTwitterSquare size={30} className='cursor-pointer'/>
                    {/* WhatsApp icon */}
                    <FaWhatsapp size={30} className='cursor-pointer'/>
                </div>
            </div>
            
            {/* Sign up and login section */}
            <div className='text-white sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0'>
                {/* Information and call to action */}
                <div>
                    {/* Heading for the call to action */}
                    <h1 className='sm-w-[30rem] md:text-4xl sm:text-3xl text-center text-2xl font-bold py-2'>
                        Want bike maintenance tips & tricks?
                    </h1>
                    {/* Description under the heading */}
                    <p className='text-center pb-4'>Sign up for More Information.</p>
                </div>
                <div className='my-4'>
                    {/* Login and Sign Up buttons */}
                    <div className='justify-center flex gap-[8%]'>
                        {/* Login button */}
                        <Link to='/login'>
                            <button className='bg-blue-400 mx-auto w-28 hover:bg-blue-500 rounded-md font-mediums'>
                                Login
                            </button>
                        </Link>
                        {/* Sign Up button */}
                        <Link to='/register'>
                            <button className='bg-blue-400 mx-auto w-28 hover:bg-blue-500 rounded-md font-mediums'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                    {/* Privacy Policy link */}
                    <p className='text-sm mx-10 flex-col text-center pt-4'> 
                        <span className='underline cursor-pointer text-blue-400'>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
        {/* Footer bottom line */}
        <div className='h-[1px] bg-gray-100/20 w-[100rem] ml-[-20rem]'></div>
        {/* Footer copyright text */}
        <p className='pt-4 bg-gray-900 text-sm flex justify-center text-blue-400 text-center'>
            All Rights Reserved &copy; 2004 - BikeBlitz
        </p>
    </div>
  );
}

export default Footer;
