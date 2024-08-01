import React from 'react';
import { Link } from 'react-router-dom';
import heroImage1 from '../../images/heroImage1.jpeg';  // Imports the hero image to be used in the hero section.
import Stars from '../../images/stars.png'; // Imports the stars image to be used for decoration in the hero section.
import { motion } from 'framer-motion'; // Imports the motion component from framer-motion to add animations to the component.

function Herosection() {
  return (
    <div className='font-poppins'>
        {/* Hero Section Wrapper */}
        <div
            className="relative dark:bg-dark pt-[120px] pb-[110px] lg:pt-[150px] bg-[#e0e0e0]"
            // Sets up the container with padding and background color for the hero section.
        >
            <div className="container mx-auto px-10">
                <div className="flex flex-wrap items-center -mx-4">
                    {/* Content Section */}
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="hero-content">
                            {/* Text and Button Animation */}
                            <motion.div  
                                variants={{      
                                    visible:{opacity:1,y:0},
                                    hidden:{opacity:0,y:75},
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{duration:0.8, delay:0.25}}
                                // Applies animation to the text and button with opacity and vertical movement.
                            >     
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r sm:text-8xl text-2xl from-blue-400 to-emerald-600 mb-3 font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    Here you can <br />
                                    <span className='sm:text-8xl text-4xl'>Enhance Your Riding Experience</span>
                                </h1>
                                <p className="mb-8 max-w-[480px] sm:text-base text-justify text-body-color text-sm">
                                    Our motorcycle repair technicians pride themselves on great skill in diagnosing and fixing a wide range of problems. With years of hands-on experience, they excel at troubleshooting and solving various motorcycle-related challenges to ensure your bike runs flawlessly.
                                </p>
                            </motion.div>
                            {/* Call to Action Button Animation */}
                            <motion.div 
                                variants={{      
                                    visible:{opacity:1,x:0},
                                    hidden:{opacity:0,x:-75},
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{duration:0.8, delay:0.25}}
                                // Applies animation to the call to action button with opacity and horizontal movement.
                            >
                                <ul className="flex flex-wrap items-center">
                                    <li>
                                        <button>  
                                        <Link
                                            to="/register"
                                            className="bg-blue-400 inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg hover:bg-blue-500 sm:px-10 lg:px-8 xl:px-10"
                                        >
                                            Sign Up
                                        </Link>
                                        </button>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                    {/* Spacer for large screens */}
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    {/* Image Section */}
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <motion.div 
                                variants={{      
                                    visible:{opacity:1,x:0, filter:"blur(0px)"},
                                    hidden:{opacity:0,x:75, filter:"blur(5px)"},
                                }}
                                initial="hidden"
                                animate="visible"
                                transition={{duration:0.8, delay:0.25}}
                                className="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                                // Applies animation to the image with opacity, horizontal movement, and blur effect.
                            >
                                <img
                                    src={heroImage1}
                                    alt="hero"
                                    className="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[6%]"
                                    // Displays the hero image with rounded corners.
                                />
                                <img 
                                    src={Stars} 
                                    alt="stars" 
                                    className='z-20 h-28 absolute mt-[-105%] right-[-5%] opacity-70 hover:opacity-100'
                                    // Displays the stars image with positioning and hover effects.
                                />
                                <span className="absolute -left-8 -bottom-8 z-[-1]">
                                    <svg
                                        width="93"
                                        height="93"
                                        viewBox="0 0 93 93"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {/* Decorative circles */}
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    </svg>
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End of Hero Section */}
    </div>
  );
}

export default Herosection;
