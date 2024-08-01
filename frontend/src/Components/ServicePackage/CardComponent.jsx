import React,{useEffect,useRef} from 'react';// Import React and hooks for component functionality and side effects
import Card from './Card';// Import Card component to render individual service packages
import image1 from '../../images/Price/2.png';
import image2 from '../../images/Price/1.png';
import image3 from '../../images/Price/33.png';
import {useAnimation,useInView,motion} from 'framer-motion';// Import animation hooks and motion components from framer-motion for animations
import { Link } from 'react-router-dom';// Import Link component from react-router-dom for navigation

function CardComponent() {
  const { innerWidth: Width } = window; // Get the current window width
  const ref = useRef(); // Create a reference for element visibility detection
  const isInView = useInView(ref); // Check if the referenced element is in the viewport
  const mainControlls = useAnimation(); // Create animation controls

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]); // Start animation when the element comes into view

  return (
    <div className='max-w-screen overflow-x-hidden font-poppins'>
    {/* Container with maximum width, hidden horizontal overflow, and font styling */}
      <div className='w-full py-[10rem] px-4 bg-white -mt-28'>
      {/* Section with full width, padding, background color, and negative top margin */}
        <div className='flex justify-center'>
        {/* Center-align the following content */}
          <h2 className='text-3xl font-bold text-center sm:text-5xl mt-[6%] text-black'>Our Exlusive Packages</h2>
          {/* Heading with text styling and center alignment */}
        </div>
        <p className="flex text-xl  justify-center sm:mb-24 mb-16 text-center mt-6 sm:mt-10 ">Ensure your vehicle gets the best care with our exclusive combo packages, designed for comprehensive maintenance and cleaning while offering significant savings.</p>
        {/* Description with text styling, center alignment, and margin adjustments */}
        
        {/* Cards */}
        <>
        {Width <631 ? (
          <>
          <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
          {/* Grid container for cards with responsive columns */}
          
          <div>
          <Card 
          image={image1} 
          Package={"Basic Care Package"} 
          Price={"₹5,000 (Save ₹1,000)"}
          Feature1={"General service check-up"}
          Feature2={"Oil change"}
          Feature3={"Suspension adjustment"}
          iconColor1={"text-green-500"}
          iconColor2={"text-green-500"}
          iconColor3={"text-green-500"}
          />
          {/* Card for Basic Care Package with features and styling */}
          </div>
          
          <div>
          <Card 
          image={image2} 
          Package={"Premium Care Package"} 
          Price={" ₹11,000 (Save ₹3,000)"}
          Feature1={"Two General service check-ups"}
          Feature2={"Two Oil changes"}
          Feature3={"Two Water washes"}
          iconColor1={"text-green-500"}
          iconColor2={"text-green-500"}
          iconColor3={"text-green-500"}
          standOutBg={"bg-blue-100/50"}
          marginMiddle={"md:my-6"}
          />
          {/* Card for Premium Care Package with features, standout background, and margin */}
          </div>
          
          <div>
          <Card 
          image={image3} 
          Package={"Complete Care Package"} 
          Price={"₹6,500 (Save ₹1,500)"}
          Feature1={"General service check-up"}
          Feature2={"Oil change"}
          Feature3={"Water wash"}
          iconColor1={"text-green-500"}
          iconColor2={"text-green-500"}
          iconColor3={"text-green-500"}
        />  
          {/* Card for Complete Care Package with features and styling */}
          </div>        
          </div>
          </>
          
          ):(

          <>
          <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
          {/* Grid container for cards with responsive columns */}
          
          <motion.div ref={ref}
          variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{duration:0.5,delay:0.25}}>
          <Card 
          image={image1} 
          Package={"Basic Care Package"} 
          Price={"₹5,000 (Save ₹1,000)"}
          Feature1={"General service check-up"}
          Feature2={"Oil change"}
          Feature3={"Suspension adjustment"}
          iconColor1={"text-green-500"}
          iconColor2={"text-green-500"}
          iconColor3={"text-green-500"}
          />
          {/* Animated card for Basic Care Package */}
          </motion.div>
          
          <motion.div ref={ref}
          variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{duration:0.5,delay:0.65}}>
          <Card 
          image={image2} 
          Package={"Premium Care Package"} 
          Price={" ₹11,000 (Save ₹3,000)"}
          Feature1={"Two General service check-ups"}
          Feature2={"Two Oil changes"}
          Feature3={"Two Water washes"}
          iconColor1={"text-green-500"}
          iconColor2={"text-green-500"}
          iconColor3={"text-green-500"}
          standOutBg={"bg-blue-100/50"}
          marginMiddle={"md:my-6"}
          />
          {/* Animated card for Premium Care Package */}
          </motion.div>
          
          <motion.div ref={ref}
          variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{duration:0.5,delay:0.35}}>
          <Card 
          image={image3} 
          Package={"Complete Care Package"} 
          Price={"₹6,500 (Save ₹1,500)"}
          Feature1={"General service check-up"}
          Feature2={"Oil change"}
          Feature3={"Water wash"}
          iconColor1={"text-green-500"}
          iconColor2={"text-green-500"}
          iconColor3={"text-green-500"}
        />  
          {/* Animated card for Complete Care Package */}
          </motion.div>        
          </div>
          </>)}
          
          <motion.div ref={ref}
          variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0},
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{duration:0.9,delay:0.35}}>
          <Link to="/packagebooking" className="text-white justify-center flex mx-auto w-[200px] bg-green-400 hover:bg-green-500 rounded-md font-medium py-3">
             Book Your Package
          </Link>
          {/* Animated booking link with styling and hover effect */}
          </motion.div>
          
        </>
        {/* Cards end */}
      </div>
      
    </div>
  )
}

export default CardComponent
