import React from 'react';
// Import React to use JSX and component functionality

import {BsFillCheckCircleFill}from 'react-icons/bs';
// Import check circle icon from react-icons for feature indicators

function Card({standOutBg, marginMiddle, Package,Price,image,Feature1,Feature2,Feature3,iconColor1,iconColor2,iconColor3}) {
  return (
    <div className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300 sm:mt-20`}>
    {/* Main card container with styling, shadow, padding, and hover effect */}
    
        <img src={image} alt="image1" className='w-40 mx-auto mt-[-3rem]'/>
        {/* Image for the card with centered alignment and negative top margin */}
        
        <h2 className='text-2xl font-bold text-center'>{Package}</h2>
        {/* Package name with text styling and center alignment */}
        
        <p className='py-2 mx-8 mb-6 -mt-2 flex justify-center text-2xl font-bold'>{Price}</p>
        {/* Price of the package with styling and center alignment */}
        
        <div className='text-center font-medium'>
        {/* Container for feature list with center alignment and medium font weight */}
        
            <p className='py-2 border-b mx-8 flex justify-between'>
              {Feature1}
              <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor1}`}/>
              {/* Feature 1 with check icon and styling */}
            </p>
            
            <p className='py-2 border-b mx-8 flex justify-between'>
              {Feature2}
              <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor2}`}/>
              {/* Feature 2 with check icon and styling */}
            </p>
            
            <p className='py-2 border-b mx-8 flex justify-between'>
              {Feature3}
              <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor3}`}/>
              {/* Feature 3 with check icon and styling */}
            </p>
            
        </div>
    </div>
  )
}

export default Card
