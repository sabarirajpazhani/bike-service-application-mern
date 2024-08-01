import React, { useState } from 'react';
import CardComponent from '../../ServicePackage/CardComponent';
import CardComponent1 from '../../ServiceCard/CardComponent';
import Navbar from '../../Navigation/Navbar';
import Footer from '../../Footer/Footer';
import Image1 from '../../../images/Services/1.png';
import Image2 from '../../../images/Services/2.png';
import Image3 from '../../../images/Services/3.png';
import Image4 from '../../../images/Services/4.png';
import Image5 from '../../../images/Services/5.png';
import Image6 from '../../../images/Services/6.png';
import Image7 from '../../../images/Services/7.png';
import Image8 from '../../../images/Services/8.png';
import { Navigate } from 'react-router-dom';

function Services() {
  const [email, setEmail] = useState(''); // Define email state
  const [password, setPassword] = useState(''); // Define password state

  if (email && password) {
    return <Navigate to="/services" />; // Redirect to /services if email and password are set
  }

  return (
    <>
      <div className='max-w-screen overflow-hidden font-poppins'>
        <Navbar/>
        <div className='sm:mt-36 mt-20'>
          <h1 className="flex justify-center text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold sm:text-7xl text-xl">
            Our services that keep you riding smoothly!
          </h1>
          <div className='sm:mt-10 mt-7'>
            <p className="focus:outline-none font-semibold uppercase text-lg text-center text-gray-600 leading-4">
              START TODAY AND
            </p>
            <h1 className="felx justify-center text-center text-3xl sm:text-5xl font-extrabold sm:ml-[15%] ml-[2%] leading-10 text-gray-800 sm:w-[70%] w-[95%] pt-4">
              Enhance Your Ride & Maximize Your Bike's Performance & Longevity
            </h1>
          </div>
        </div>

        <div className='-mt-[2%]'>
          <CardComponent/>
          <div className='w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
        </div>

        <div className='mb-[20%]'>
          <CardComponent1/>
          <div className='flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
        </div>

        <section className="py-20 -mt-[15%] lg:py-[0px] bg-gray-500/15">
          <div className="container p-4 mx-auto text-center">
            <h2 className="text-4xl font-bold">Our Trusted Partners</h2>
          </div>

          <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-600">
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <img src={Image1} alt="Icon" className="fill-current w-15 h-15"/>
            </div>

            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <img src={Image2} alt="Icon" className="fill-current w-20 h-20"/>
            </div>

            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <img src={Image3} alt="Icon" className="fill-current w-20 h-23"/>
            </div>

            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <img src={Image4} alt="Icon" className="fill-current w-30 h-20"/>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <img src={Image5} alt="Icon" className="fill-current w-30 h-20"/>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <img src={Image6} alt="Icon" className="fill-current w-30 h-20"/>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <img src={Image7} alt="Icon" className="fill-current w-15 h-15"/>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <img src={Image8} alt="Icon" className="fill-current w-20 h-20"/>
            </div>
          </div>
        </section>
        
        <Footer/>
      </div>
    </>
  );
}

export default Services;

// To start the React application, use the command: npm start
