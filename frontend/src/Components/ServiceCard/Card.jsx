import React from 'react';

function Card({ standOutBg, marginMiddle, Package, Price, image }) {
  return (
    <div className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`}>
      {/* The div container for the card with various styling applied */}
      
      <img src={image} alt="image1" className='w-40 mx-auto mt-[-3rem]'/>
      {/* Renders an image using the `src` prop passed to the Card component, with width, margin, and top margin for styling */}
      
      <h2 className='text-2xl font-bold text-center'>{Package}</h2>
      {/* Renders the package name passed to the Card component as a prop in an h2 tag with specific text styling */}
      
      <p className='py-2 mx-8 mb-6 -mt-2 flex justify-center text-2xl font-bold'>{Price}</p>
      {/* Renders the price passed to the Card component as a prop in a p tag with specific text styling and alignment */}
    </div>
  );
}

export default Card;
