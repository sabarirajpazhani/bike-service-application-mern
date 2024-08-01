import React from 'react'
import Navbar from '../../Navigation/Navbar' // Import Navbar component
import Footer from '../../Footer/Footer' // Import Footer component

const Profile = () => {

  return (
    <>
    <div className="justify-center font-poppins">
        <Navbar/> {/* Render Navbar at the top of the profile page */}
        <h1 className="mt-[30%] sm:mt-[10%] flex justify-center text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Profile {/* Profile header with gradient text */}
        </h1>
    <div className="sm:mt-[-5%] mt-[-20%] min-h-screen flex items-center justify-center font-poppins">
      <div className="max-w-screen-xl grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" // Profile picture URL
            alt=""
            className="w-50 h-50 mx-auto rounded-full aspect-square" // Image styling
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">username</h2> {/* Placeholder for username */}
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">email@gmail.com</p> {/* Placeholder for email */}
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
            <p className='mt-[25px] text-gray-700 text-sm'>All Rights Reserved - BikeBlitz</p> {/* Footer text */}
        </div>
      </div>
    </div>
    
    </div>
    <Footer/> {/* Render Footer at the bottom of the profile page */}
    </>
  )
}

export default Profile; // Export Profile component as default
