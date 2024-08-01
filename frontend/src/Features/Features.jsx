import React,{useEffect,useRef} from 'react'
import logo1 from '../../src/images/Features/f1.png'
import logo2 from '../../src/images/Features/f2.png'
import logo3 from '../../src/images/Features/f3.png'
import logo4 from '../../src/images/Features/f4.png'
import logo5 from '../../src/images/Features/f5.png'
import logo6 from '../../src/images/Features/f6.png'
import image1 from '../../src/images/Features/fb111.jpg'
import image2 from '../../src/images/Features/fb222.jpg'
import { useAnimation,useInView,motion} from 'framer-motion'


function Features() {
    const {innerWidth:width}=window;
    const ref=useRef(null);
    const isInView=useInView(ref)

    const mainControlls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControlls.start("visible")
        }
    },[isInView])   // Start animation when the element comes into view
  return (
    <>
	{/* Renders a gradient divider at the top of the section. */}
      <div className='w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>   
      <div className='max-w-Screen overflow-x-hidden font-poppins'>
        {/* features Section */}
        {width < 631 ?(
            // for phone can't have the motion
			// Checks if the window width is less than 631 pixels, to render the mobile view.
             <>    
            <section className=" text-black">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Why Choose Us For Repair ?</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center">Choose us for repairs because we offer unmatched expertise,
                  timely service, and competitive pricing. Our skilled
                  technicians use cutting-edge tools and have a proven track
                  record of delivering top-quality repairs. We prioritize
                  customer satisfaction, ensuring your vehicle is in safe hands
                  and ready for the road.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Bike Service with Robust Technical Support</h3>
				<p className="mt-3 text-lg"> Effective technical support is crucial for the seamless operation and user satisfaction of a bike service management application, ensuring customers and service providers can efficiently manage registrations, bookings, notifications, and service statuses.</p>
				<div className="mt-12 space-y-12">

					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
								<img src={logo1} alt="l"/>
							</div>
						</div>
                        <div class='ml-4'>
                        <div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Service Selection and Booking</h4>
							<p className="mt-2"> A user-friendly service selection and booking system enables customers to choose and schedule services efficiently.</p>
						</div>
                        </div>
					</div>

					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
                                <img src={logo2} alt="logo2"/>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">24/7 Technical Support</h4>
							<p className="mt-2 ">Continuous technical support ensures that any issues are promptly addressed, maintaining smooth operation and customer satisfaction.</p>
						</div>
					</div>

					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
								<img src={logo3} alt="logo3"/>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Customer and Service Management</h4>
							<p className="mt-2 ">Efficient management of customer information and service bookings is key to delivering high-quality service.</p>
						</div>
					</div>

				</div>
			</div>

			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src={image1} alt="image1" className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</div>

		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Expert Bike Technicians</h3>
					<p className="mt-3 text-lg ">Our expert bike technicians combine precision, efficiency, and exceptional care to deliver top-notch service. Trust us for reliable repairs and maintenance that keep you safely on the road.</p>
					<div className="mt-12 space-y-12">

						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
                                <img src={logo4} alt="logo4"/>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Fast and Reliable Bike Repairs</h4>
								<p className="mt-2 ">Capable of performing tasks quickly without compromising on quality, reducing wait times for customers.</p>
							</div>
						</div>

						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
                                <img src={logo5} alt="logo5"/>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Meet Our Skilled Technicians</h4>
								<p className="mt-2">Skilled in diagnosing and repairing a wide range of bike issues, ensuring high-quality service.</p>
							</div>
						</div>

						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
                                <img src={logo6} alt="logo6"/>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Exceptional Customer Experience</h4>
								<p className="mt-2"> Friendly and professional, providing clear explanations and building strong customer relationships.</p>
							</div>
						</div>

					</div>
				</div>

				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src={image2} alt="image2" className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>

            </>
        ) : (
// For larger screens (width >= 631), render the section with motion effects
    //    for desktop have the motion
        <>   
        <section className=" text-black">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">Why Choose Us For Repair ?</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center">Choose us for repairs because we offer unmatched expertise,
                  timely service, and competitive pricing. Our skilled
                  technicians use cutting-edge tools and have a proven track
                  record of delivering top-quality repairs. We prioritize
                  customer satisfaction, ensuring your vehicle is in safe hands
                  and ready for the road.s</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Bike Service with Robust Technical Support</h3>
				<p className="mt-3 text-lg">Effective technical support is crucial for the seamless operation and user satisfaction of a bike service management application, ensuring customers and service providers can efficiently manage registrations, bookings, notifications, and service statuses.</p>
				<div className="mt-12 space-y-12">

					<motion.div
                    ref={ref}   
                    variants={{
                        hidden:{opacity:0,y:75},
                        visible:{opacity:1,y:0}
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{duration:0.5, delay:0.15}}
                    className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
								<img src={logo1} alt="l"/>
							</div>
						</div>
                        <div class='ml-4'>
                        <div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Service Selection and Booking</h4>
							<p className="mt-2"> A user-friendly service selection and booking system enables customers to choose and schedule services efficiently.</p>
						</div>
                        </div>
					</motion.div>

					<motion.div
                    ref={ref} 
                    variants={{
                        hidden:{opacity:0,y:75},
                        visible:{opacity:1,y:0}
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{duration:0.5, delay:0.35}} 
                    className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
                                <img src={logo2} alt="logo2"/>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">24/7 Technical Support</h4>
							<p className="mt-2 ">Continuous technical support ensures that any issues are promptly addressed, maintaining smooth operation and customer satisfaction.</p>
						</div>
					</motion.div>

					<motion.div
                    ref={ref} 
                    variants={{
                        hidden:{opacity:0,y:75},
                        visible:{opacity:1,y:0}
                    }}
                    initial="hidden"
                    animate={mainControlls}
                    transition={{duration:0.5, delay:0.55}} 
                    className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
								<img src={logo3} alt="logo3"/>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Customer and Service Management</h4>
							<p className="mt-2 ">Efficient management of customer information and service bookings is key to delivering high-quality service.</p>
						</div>
					</motion.div>

				</div>
			</div>

			<motion.div
            ref={ref} 
            variants={{
                hidden:{opacity:0,x:75},
                visible:{opacity:1,x:0}
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{duration:0.5, delay:0.25}} 
            aria-hidden="true" className="mt-10 lg:mt-0">
				<img src={image1} alt="image1" className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
			</motion.div>

		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">Expert Bike Technicians</h3>
					<p className="mt-3 text-lg "> Our expert bike technicians combine precision, efficiency, and exceptional care to deliver top-notch service. Trust us for reliable repairs and maintenance that keep you safely on the road.</p>
					<div className="mt-12 space-y-12">

						<motion.div
                        ref={ref} 
                        variants={{
                            hidden:{opacity:0,y:-75},
                            visible:{opacity:1,y:0}
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{duration:0.5, delay:0.25}} 
                        className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
                                <img src={logo4} alt="logo4"/>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Fast and Reliable Bike Repairs</h4>
								<p className="mt-2 ">Capable of performing tasks quickly without compromising on quality, reducing wait times for customers.</p>
							</div>
						</motion.div>

						<motion.div
                         ref={ref} 
                         variants={{
                             hidden:{opacity:0,y:-75},
                             visible:{opacity:1,y:0}
                         }}
                         initial="hidden"
                         animate={mainControlls}
                         transition={{duration:0.5, delay:0.35}} 
                         className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
                                <img src={logo5} alt="logo5"/>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Meet Our Skilled Technicians</h4>
								<p className="mt-2">Skilled in diagnosing and repairing a wide range of bike issues, ensuring high-quality service.</p>
							</div>
						</motion.div>

						<motion.div 
                         ref={ref} 
                         variants={{
                             hidden:{opacity:0,y:-75},
                             visible:{opacity:1,y:0}
                         }}
                         initial="hidden"
                         animate={mainControlls}
                         transition={{duration:0.5, delay:0.55}} 
                        className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-default-600 ">
                                <img src={logo6} alt="logo6"/>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6 dark:text-gray-900">Exceptional Customer Experience</h4>
								<p className="mt-2"> Friendly and professional, providing clear explanations and building strong customer relationships.</p>
							</div>
						</motion.div>

					</div>
				</div>

				<motion.div 
                ref={ref} 
                variants={{
                    hidden:{opacity:0,x:75},
                    visible:{opacity:1,x:0}
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{duration:0.5, delay:0.15}} 
                className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src={image2} alt="image2" className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
				</motion.div>
			</div>
		</div>
	</div>
</section></>)}
        
        {/* end */}
    </div>
    <div className='flex justify-end ml-[30%]  w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
    </>
  )
}

export default Features