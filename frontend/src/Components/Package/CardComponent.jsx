import React, { useEffect, useRef } from 'react'
import Card from './Card'
import image1 from '../../images/Price/2.png'
import image2 from '../../images/Price/1.png'
import image3 from '../../images/Price/33.png'
import { useAnimation, useInView, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * CardComponent displays a set of Card components with animations.
 */
function CardComponent() {
  const { innerWidth: Width } = window; // Get the current window width
  const ref = useRef(); // Ref to track element's visibility
  const isInView = useInView(ref); // Hook to check if element is in view
  const mainControlls = useAnimation(); // Animation control for the cards

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible"); // Start animation when element is in view
    }
  }, [isInView]);

  return (
    <div className='max-w-screen overflow-x-hidden font-poppins'>
      <div className='w-full py-[10rem] px-4 bg-white -mt-28'>
        {/* Title and description */}
        <div className='flex justify-center'>
          <h2 className='text-3xl font-bold text-center sm:text-5xl mt-[6%] text-black'>Our Exclusive Packages</h2>
        </div>
        <p className="flex text-xl justify-center sm:mb-24 mb-16 text-center mt-6 sm:mt-10">
          Ensure your vehicle gets the best care with our exclusive combo packages, designed for comprehensive maintenance and cleaning while offering significant savings.
        </p>
        {/* Cards */}
        <>
          {Width < 631 ? (
            // Render cards in a grid layout for small screens
            <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
              <div>
                <Card
                  image={image1}
                  Package={"Basic Care Package"}
                  Price={"₹1,500 (Save ₹300)"}
                />
              </div>
              <div>
                <Card
                  image={image2}
                  Package={"Complete Care Package"}
                  Price={"₹2,000 (Save ₹500)"}
                  standOutBg={"bg-blue-100/50"}
                  marginMiddle={"md:my-6"}
                />
              </div>
              <div>
                <Card
                  image={image3}
                  Package={"Premium Care Package"}
                  Price={"₹4,000 (Save ₹1000)"}
                />
              </div>
            </div>
          ) : (
            // Render cards with animations for larger screens
            <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Card
                  image={image1}
                  Package={"Basic Care Package"}
                  Price={"₹1,500 (Save ₹300)"}
                />
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.65 }}
              >
                <Card
                  image={image2}
                  Package={"Complete Care Package"}
                  Price={"₹2,000 (Save ₹500)"}
                  standOutBg={"bg-blue-100/50"}
                  marginMiddle={"md:my-6"}
                />
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <Card
                  image={image3}
                  Package={"Premium Care Package"}
                  Price={"₹4,000 (Save ₹1000)"}
                />
              </motion.div>
            </div>
          )}
          {/* Link to services page */}
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <Link to="/services" className="text-white justify-center flex mx-auto w-[200px] bg-green-400 hover:bg-green-500 rounded-md font-medium py-3">
              View Services
            </Link>
          </motion.div>
        </>
        {/* Cards end */}
      </div>
    </div>
  )
}

export default CardComponent
