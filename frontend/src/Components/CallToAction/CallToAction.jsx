import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

function CallToAction() {
    // Create a ref for the element to check if it is in view
    const ref = useRef();
    // Hook to check if the element is in view
    const isInView = useInView(ref);
    // Animation controls for framer-motion
    const mainControlls = useAnimation(isInView);

    // Effect to start animation when the element is in view
    useEffect(() => {
        if (isInView) {
            mainControlls.start("visible");
        }
    }, [isInView, mainControlls]);

    return (
        <div>
            {/* Gradient line at the top */}
            <div className='w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
            <>
                {/* Main section of the call-to-action */}
                <section className="py-20 lg:py-[120px] bg-gray-100/50">
                    <div className="container mx-auto">
                        <div
                            className="relative z-10 sm:-mt-10 sm:-mb-10 overflow-x-hidden rounded bg-blue-800 py-12 px-8 md:p-[70px]"
                        >
                            <div className="flex flex-wrap items-center -mx-4">
                                {/* Text block with motion animation */}
                                <motion.div 
                                    ref={ref}
                                    variants={{
                                        visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -75 },
                                    }}
                                    initial="hidden"
                                    animate={mainControlls}
                                    transition={{ duration: 0.4, delay: 0.20 }}
                                    className="w-full px-4 lg:w-1/2"
                                >
                                    <span className="block mb-4 text-base font-medium text-white">
                                        Keep your bike in perfect condition!
                                    </span>
                                    <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
                                        Schedule a service today and <br className="xs:block hidden" />
                                        let us handle the<span className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400'>Rest!</span>
                                    </h2>
                                </motion.div>
                                {/* Button with motion animation */}
                                <div className="w-full px-4 lg:w-1/2">
                                    <div className="flex sm:flex-wrap sm:justify-end">
                                        <motion.div
                                            ref={ref}
                                            variants={{
                                                visible: { opacity: 1, x: 0 },
                                                hidden: { opacity: 0, x: 75 },
                                            }}
                                            initial="hidden"
                                            animate={mainControlls}
                                            transition={{ duration: 0.4, delay: 0.50 }}
                                        >
                                            <Link
                                                to="/register"
                                                className="my-1 inline-block rounded bg-[#1c9b7b] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                                            >
                                                Sign Up
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            {/* Background SVGs for decorative effect */}
                            <div>
                                <span className="absolute top-0 left-0 z-[-1]">
                                    <svg
                                        width="189"
                                        height="162"
                                        viewBox="0 0 189 162"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse
                                            cx="16"
                                            cy="-16.5"
                                            rx="173"
                                            ry="178.5"
                                            transform="rotate(180 16 -16.5)"
                                            fill="url(#paint0_linear)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="-157"
                                                y1="-107.754"
                                                x2="98.5011"
                                                y2="-106.425"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" stopOpacity="0.07" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="absolute bottom-0 right-0 z-[-1]">
                                    <svg
                                        width="191"
                                        height="208"
                                        viewBox="0 0 191 208"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse
                                            cx="173"
                                            cy="178.5"
                                            rx="173"
                                            ry="178.5"
                                            fill="url(#paint0_linear)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="-3.27832e-05"
                                                y1="87.2457"
                                                x2="255.501"
                                                y2="88.5747"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="white" stopOpacity="0.07" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            {/* Gradient line at the bottom */}
            <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        </div>
    );
}

export default CallToAction;
