import React from 'react'

/**
 * Card component displays a service package with an image, package name, and price.
 * @param {string} standOutBg - Background color for standout effect.
 * @param {string} marginMiddle - Margin settings for middle spacing.
 * @param {string} Package - Name of the service package.
 * @param {string} Price - Price and discount information of the package.
 * @param {string} image - Image URL for the card.
 * @param {string} Feature1 - Feature 1 description (unused in this component).
 * @param {string} Feature2 - Feature 2 description (unused in this component).
 * @param {string} Feature3 - Feature 3 description (unused in this component).
 * @param {string} Feature4 - Feature 4 description (unused in this component).
 * @param {string} Feature5 - Feature 5 description (unused in this component).
 * @param {string} Feature6 - Feature 6 description (unused in this component).
 * @param {string} iconColor1 - Color for icon 1 (unused in this component).
 * @param {string} iconColor2 - Color for icon 2 (unused in this component).
 * @param {string} iconColor3 - Color for icon 3 (unused in this component).
 * @param {string} iconColor4 - Color for icon 4 (unused in this component).
 * @param {string} iconColor5 - Color for icon 5 (unused in this component).
 * @param {string} iconColor6 - Color for icon 6 (unused in this component).
 * @param {string} buttonBg - Background color for button (unused in this component).
 * @param {string} buttonTextColor - Text color for button (unused in this component).
 * @param {string} hoverBgButton - Hover background color for button (unused in this component).
 */
function Card({ standOutBg, marginMiddle, Package, Price, image, Feature1, Feature2, Feature3, Feature4, Feature5, Feature6, iconColor1, iconColor2, iconColor3, iconColor4, iconColor5, iconColor6, buttonBg, buttonTextColor, hoverBgButton }) {
  return (
    <div className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`}>
      {/* Display package image */}
      <img src={image} alt="image1" className='w-40 mx-auto mt-[-3rem]' />
      {/* Display package name */}
      <h2 className='text-2xl font-bold text-center'>{Package}</h2>
      {/* Display price information */}
      <p className='py-2 mx-8 mb-6 -mt-2 flex justify-center text-2xl font-bold'>{Price}</p>
    </div>
  )
}

export default Card
