import React, { useEffect, useRef } from 'react';
import Navbar from '../../Navigation/Navbar'; // Import Navbar component
import Footer from '../../Footer/Footer'; // Import Footer component
import { useAnimation, useInView, motion } from 'framer-motion'; // Import Framer Motion hooks for animations
import TeamImage from '../../../images/Team/team1.jpg'; // Import main team image
import Worker1 from '../../../images/Team/1.png'; // Import image for worker 1
import Worker2 from '../../../images/Team/2.png'; // Import image for worker 2
import Worker3 from '../../../images/Team/3.png'; // Import image for worker 3
import Worker4 from '../../../images/Team/4.png'; // Import image for worker 4
import Worker5 from '../../../images/Team/5.png'; // Import image for worker 5
import Worker6 from '../../../images/Team/6.png'; // Import image for worker 6
import { FaEnvelope, FaInstagram, FaFacebookSquare } from 'react-icons/fa'; // Import social media icons

const About = () => {
    // UseRef to track the element's visibility
    const ref = useRef();
    // Check if the element is in view
    const isInView = useInView(ref);
    // Animation controls for framer-motion
    const mainControlls = useAnimation();

    useEffect(() => {
      // Start animation when the element comes into view
      if (isInView) {
        mainControlls.start("visible");
      }
    }, [isInView]);

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div className="max-w-screen overflow-hidden font-poppins">
        <div className="sm:h-screen h-[80rem] -mb-20 sm:mb-0 0 pt-20">
          <div className="mt-20">
            <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: -75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex justify-center text-center"
            >
              {/* Main heading with gradient text */}
              <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold text-[3rem]">
              Who are we and why are we the best?
              </h1>
            </motion.div>
            <div className="sm:flex sm:justify-between sm:mr-[10%] sm:mt-20 mt-10 ml-10">
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:w-[50%] w-[90%] mb-10 sm:mb-0"
              >
                {/* Image of the team */}
                <img
                  alt="imageAbout"
                  src={TeamImage}
                  className="rounded-2xl sm:toas:translate-x-[200px] sm:taos:opacity-0 sm:hover:-translate-y-2 sm:transition sm:ease-in-out duration-300 sm:hover:drop-shadow-xl sm:z-20 sm:mx-auto shadow-lg "
                />
              </motion.div>
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, x: 75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="sm:flex sm:justify-center text-center sm:mt-20"
              >
                {/* Quote */}
                <h1 className="text-xl sm:text-4xl sm:font-extrabold font-bold text-blue-500 ml-[-10%] sm:ml-[5%] mb-10 sm:mb-0">
                "We are inspired by performance and driven by precision."
                </h1>
              </motion.div>
            </div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="block h-screen sm:justify-start justify-center text-center sm:text-start sm:ml-20 ml-0"
            >
              {/* About Us section */}
              <p className="sm:flex justify-center text-3xl hidden ml-[-80%] mb-[-10%] sm:my-24">
                About Us:
              </p>
              <p className="hidden sm:flex border-y-2 py-4 border-y-indigo-900/30 text-justify font-semibold sm:ml-[13%] w-[70%] ">
              Welcome to our premier bike service application, where your ride's health and performance are our top priorities. Our mission is to empower riders with exceptional service solutions that ensure your bike runs smoothly and efficiently. Leveraging cutting-edge technology and industry expertise, we provide comprehensive services tailored to meet the unique needs of every rider. Our personalized approach ensures that each bike receives the attention it deserves, addressing specific maintenance and performance requirements. At our bike service application, we offer a range of packages designed to keep your bike in top condition. Whether you're a daily commuter or a weekend warrior, our expert team is here to deliver unparalleled service. Our offerings include a General Service Check-up, Oil Change, and Water Wash, all aimed at enhancing your bike's longevity and performance.
              </p>
              <p className="mt-20 text-lg font-semibold sm:hidden block mb-14">
                About Us:
              </p>
              <p className="flex sm:hidden mt-4 mx-6">
              WAt our site, we believe that success lies in
                harnessing the power of technology and data to drive meaningful
                outcomes. Whether you're a small startup or a large enterprise,
                our comprehensive range of services and solutions is designed to
                meet your unique needs. From advanced algorithms and powerful
                analytics capabilities to seamless technology integration and
                ongoing support from our trained personnel, we are dedicated to
                helping businesses grow and succeed. Join us on this
                transformative journey, and together, we will propel your
                business to new heights of success.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Workers section */}
        <section className=" mt-[35%] py-6">
          <div className='w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
          <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <p className="p-2 text-sm font-semibold tracking-wider text-center uppercase">Service experts</p>
            <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The skilled technicians ensuring your ride's excellence</h1>
            <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
              {/* Worker profiles */}
              {[
                { name: 'Manish', role: 'Lead Mechanic', image: Worker1 },
                { name: 'Aarav', role: 'Oil Change Expert', image: Worker2 },
                { name: 'Dev', role: 'Water wash Specialist', image: Worker3 },
                { name: 'Rohan', role: 'CheckUp Specialist', image: Worker4 },
                { name: 'Ishaan', role: 'Service Coordinator', image: Worker5 },
                { name: 'Kabir', role: 'Bike Technician', image: Worker6 }
              ].map((worker, index) => (
                <div key={index} className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
                  <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={worker.image} />
                  <div className="flex-1 my-4">
                    <p className="text-xl font-semibold leading-snug">{worker.name}</p>
                    <p>{worker.role}</p>
                  </div>
                  <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                    <FaEnvelope size={20} className='cursor-pointer dark:text-gray-50 hover:dark:text-violet-600 ' />
                    <FaInstagram size={20} className='cursor-pointer dark:text-gray-50 hover:dark:text-violet-600 '/>
                    <FaFacebookSquare size={20} className='cursor-pointer dark:text-gray-50 hover:dark:text-violet-600' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Workers Section end */}

        <div className='flex justify-end ml-[30%]  w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
        <div className='h-[40rem] sm:mt-20 mt-[20%] mb=20'>
          <h1 className='flex justify-center font-extrabold text-center sm:text-4xl text-2xl'>Where You can find us</h1>
          <div className='flex justify-center mt-20'>
            {/* Google Maps iframe for location */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52224.16106059078!2d80.2071922672202!3d13.05436888697614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722109428700!5m2!1sen!2sin" 
              allowfullscreen="Map" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              className='w-screen sm:mx-36 mx-10 h-[30rem]'
            ></iframe>
          </div>
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default About;
