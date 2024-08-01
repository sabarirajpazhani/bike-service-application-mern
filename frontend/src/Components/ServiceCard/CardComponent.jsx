import React,{useEffect,useRef} from 'react';
// Import necessary React hooks and components

import Card from './Card';
// Import the Card component to be used in this component

import image1 from '../../images/Price/11.png';
import image2 from '../../images/Price/333.png';
import image3 from '../../images/Price/22.png';
// Import images to be used in the cards

import {useAnimation,useInView,motion} from 'framer-motion';
// Import Framer Motion hooks for animations

import { Link } from 'react-router-dom';
// Import Link component from react-router-dom for navigation

function CardComponent() {
  const { innerWidth: Width } = window;
  // Get the innerWidth of the window to determine responsive behavior

  const ref = useRef();
  // Create a ref to track the component's visibility

  const isInView = useInView(ref);
  // Check if the component is in view using the ref

  const mainControlls = useAnimation();
  // Create animation controls using Framer Motion

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  // Start animation when the component comes into view

  return (
    <div className='max-w-screen overflow-x-hidden font-poppins'>
      {/* Main container with styling */}
      
      <div className='w-full py-[10rem] px-4 bg-white -mt-28'>
        {/* Container for the content with padding and background color */}
        
        <div className='flex justify-center'>
          <h2 className='text-3xl font-bold text-center sm:text-5xl mt-[6%] text-black'>Our Exlusive Services</h2>
          {/* Heading for the section with responsive text size */}
        </div>
        
        <p className="flex text-xl  justify-center sm:mb-24 mb-16 text-center mt-6 sm:mt-10 ">
          Ensure your bike receives top-notch care with our comprehensive maintenance and cleaning services, providing excellent value and quality.
          {/* Description text for the section */}
        </p>

        {/* Cards */}
        <>
        {Width < 631 ? (
          <>
          <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
            {/* Container for cards with responsive grid layout */}
            
            <div>
              <Card 
                image={image1} 
                Package={"Water wash"} 
                Price={"₹150"}
              />
              {/* Card component for 'Water wash' service */}
            </div>
            <div>
              <Card 
                image={image2} 
                Package={"Oil change"} 
                Price={"₹1,000"}
                standOutBg={"bg-blue-100/50"}
                marginMiddle={"md:my-6"}
              />
              {/* Card component for 'Oil change' service with standout background and margin */}
            </div>
            <div>
              <Card 
                image={image3} 
                Package={"General service check-up"} 
                Price={" ₹800"}
              />  
              {/* Card component for 'General service check-up' */}
            </div>        
          </div>
          </>
        ) : (
          <>
          <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
            {/* Container for cards with responsive grid layout */}

            <motion.div 
              ref={ref}
              variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0},
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{duration:0.5,delay:0.25}}
            >
              <Card 
                image={image1} 
                Package={"Water wash"} 
                Price={"₹150"}
              />
              {/* Motion div for animated card component 'Water wash' */}
            </motion.div>

            <motion.div 
              ref={ref}
              variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0},
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{duration:0.5,delay:0.65}}
            >
              <Card 
                image={image2} 
                Package={"Oil change"} 
                Price={"₹1,000"}
                marginMiddle={"md:my-6"}
              />
              {/* Motion div for animated card component 'Oil change' */}
            </motion.div>

            <motion.div 
              ref={ref}
              variants={{
                hidden:{opacity:0,y:75},
                visible:{opacity:1,y:0},
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{duration:0.5,delay:0.35}}
            >
              <Card 
                image={image3} 
                Package={"General service check-up"} 
                Price={" ₹800"}
              />  
              {/* Motion div for animated card component 'General service check-up' */}
            </motion.div>        
          </div>
          </>
        )}
        
        <motion.div 
          ref={ref}
          variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{duration:0.9,delay:0.35}}
        >
          <Link to="/booking" className="text-white justify-center flex mx-auto w-[200px] bg-green-400 hover:bg-green-500 rounded-md font-medium py-3">
            Book Your Service
          </Link>
          {/* Button for booking service with animation */}
        </motion.div>
        
        </>
        
        {/* Cards end */}
      </div>
      
    </div>
  )
}

export default CardComponent;
