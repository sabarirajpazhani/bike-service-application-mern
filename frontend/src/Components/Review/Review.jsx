import React,{useEffect,useRef} from 'react'
import { MdVerified } from "react-icons/md";
import {useAnimation,useInView,motion} from 'framer-motion'

function Review() {
    const {innerWidth:Width}=window  // Get the width of the window
    const ref = useRef();   // Create a ref for the elements to observe
    const isInView = useInView(ref);    // Check if the element is in view
    const mainControlls = useAnimation();   // Create animation controls

    useEffect(() => {  
        if (isInView) {
            mainControlls.start("visible");   // Start the animation when the element is in view
        }
    }, [isInView]);  // Run the effect when isInView changes
    return (
    <div className='overflow-x-hidden max-w-screen font-poppins'>
        <section className="text-black">
        {Width<631 ? (                             // Check if the window width is less than 631 for mobile view   
            <>
            <div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl rounded shadow-md bg-blue-100/10 p-6 mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold text-black">What our costumers have to say</h2>
            <p className="text-black">Here are some reviews from our customers and their experiences with the services we provide!</p>
			</div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md bg-blue-200/30">
							<p>I recently had my bike serviced here, and I couldn’t be happier with the results! The staff was incredibly knowledgeable and took the time to explain what needed to be done. The turnaround time was quicker than expected, and my bike rides like new again. The attention to detail was impressive, and the pricing was fair. Highly recommend this shop to any cyclist!


                          </p>
                          <div className="flex justify-between items-center mt-4 space-x-4">
                                <div className='flex'>
                                <img src="https://img.freepik.com/premium-vector/anonymous-user-profile-avatar-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Photo1" className="w-12 h-12 bg-center bg-cover rounded-full" />

								<div className='flex-col ml-4'>
									<p className="text-lg font-semibold">Vijay</p>
									<p className="text-sm text-gray-400">Kawasaki Ninja ZX-10R</p>
								</div>
                                </div>
                                <div className='flex'>
                                    <MdVerified size={Width< 631 ? 35:40} className='text-green-400 ml-2'/>
                                </div>
							</div>
						</div>

						<div className="p-6 rounded shadow-md bg-blue-200/60">
							<p>Exceptional service! The team at this bike shop went above and beyond to ensure my bike was in top shape. They provided thorough diagnostics and fixed issues that other places missed. Friendly staff and a clean, organized workshop made the whole experience pleasant. I appreciate their dedication to quality and customer satisfaction.

</p>
							<div className="flex justify-between items-center mt-4 space-x-4">
                                <div className='flex'>
                                <img src="https://img.freepik.com/premium-vector/anonymous-user-profile-avatar-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Photo2" className="w-12 h-12 bg-center bg-cover rounded-full" />

								<div className='flex-col ml-4'> 
									<p className="text-lg font-semibold">Selwin Sellu</p>
									<p className="text-sm text-gray-400">Royal Enfield Continental GT 650</p>
								</div>
                                </div>
                                <div className='flex'>
                                    <MdVerified size={Width< 631 ? 35:40} className='text-green-400 ml-2'/>
                                </div>
							</div>
						</div>
					</div>

					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md bg-blue-200/60">
							<p>I had an excellent experience with this bike service. They were efficient, professional, and clearly experts in their field. They managed to fix my bike quickly and even gave me some helpful maintenance tips. The service was reasonably priced, and I felt valued as a customer. Definitely a go-to place for all bike-related needs!</p>
							<div className="flex justify-between items-center mt-4 space-x-4">
                                <div className='flex '>
                                <img src="https://img.freepik.com/premium-vector/anonymous-user-profile-avatar-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Photo3" className="w-12 h-12 bg-center bg-cover rounded-full" />

								<div className='text-md font-semibold'> 
									<p className="text-lg font-semibold">Sathish</p>
									<p className="text-sm text-gray-400">KTM RC 390</p>
								</div>
                                </div>
                                <div className='flex'>
                                    <MdVerified size={Width< 631 ? 35:40} className='text-green-400 ml-2'/>
                                </div>
							</div>
						</div>

						<div className="p-6 rounded shadow-md bg-blue-200/30">
							<p>Fantastic service from start to finish! The mechanics were friendly and took great care in handling my bike. They communicated clearly about what repairs were needed and why. I was impressed with their attention to detail and how they went the extra mile to ensure everything was perfect. I’ll be coming back for all my future bike services.</p>
                          <div className="flex justify-between items-center mt-4 space-x-4">
                                <div className='flex'>
                                <img src="https://img.freepik.com/premium-vector/anonymous-user-profile-avatar-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Photo4" className="w-12 h-12 bg-center bg-cover rounded-full" />

								<div className='text-md flex-col ml-4'> 
									<p className="text-lg font-semibold">Arawind</p>
									<p className="text-sm text-gray-400">Suzuki Hayabusa</p>
								</div>
                                </div>
                                <div className='flex'>
                                    <MdVerified size={Width< 631 ? 35:40} className='text-green-400 ml-2'/>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
    ):(              // Code to render for larger screens (631 pixels or more)
    <>
    <div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
			<motion.div
            ref={ref}
            variants={{
              hidden:{opacity:0},
              visible:{opacity:1},
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{duration:0.5,delay:0.25}} 
            className="max-w-2xl rounded shadow-md bg-blue-100/10 p-6 mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
				<h2 className="text-4xl font-bold text-black">What our costumers have to say</h2>
				<p className="text-black">Here are some reviews from our customers and their experiences with the services we provide!</p>
			</motion.div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<motion.div 
                        ref={ref}
                        variants={{
                          hidden:{opacity:0,x:-75,y:-45},
                          visible:{opacity:1,x:0,y:0},
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{duration:0.6,delay:0.15}}
                        className="p-6 rounded shadow-md bg-blue-200/30">
							<p>I recently had my bike serviced here, and I couldn’t be happier with the results! The staff was incredibly knowledgeable and took the time to explain what needed to be done. The turnaround time was quicker than expected, and my bike rides like new again. The attention to detail was impressive, and the pricing was fair. Highly recommend this shop to any cyclist!

</p>
							<div className="flex justify-between items-center mt-4 space-x-4">
                                <div className='flex'>
                                <img src="https://img.freepik.com/premium-vector/anonymous-user-profile-avatar-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Photo5" className="w-12 h-12 bg-center bg-cover rounded-full" />

								<div className='flex-col ml-4'>
									<p className="text-lg font-semibold">Vijay</p>
									<p className="text-sm text-gray-400">Kawasaki Ninja ZX-10R</p>
								</div>
                                </div>
                                <div className='flex'>
                                    <MdVerified size={Width< 631 ? 35:40} className='text-green-400 ml-2'/>
                                </div>
							</div>
						</motion.div>

						<motion.div
                        ref={ref}
                        variants={{
                          hidden:{opacity:0,x:-75,y:45},
                          visible:{opacity:1,x:0,y:0},
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{duration:0.6,delay:0.15}} 
                        className="p-6 rounded shadow-md bg-blue-200/60">
							<p>Exceptional service! The team at this bike shop went above and beyond to ensure my bike was in top shape. They provided thorough diagnostics and fixed issues that other places missed. Friendly staff and a clean, organized workshop made the whole experience pleasant. I appreciate their dedication to quality and customer satisfaction.

</p>
							<div className="flex justify-between mt-4 space-x-4">
                            <div className='flex'>
                            <img src="https://img.freepik.com/premium-vector/anonymous-user-profile-avatar-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Photo6" className="w-12 h-12 bg-center bg-cover rounded-full" />

								<div className='flex-col sm:ml-2'>
									<p className="text-lg font-semibold">Selwin Sellu </p>
									<p className="text-sm text-gray-400">Royal Enfield Continental GT 650</p>
								</div>
                                </div>
                                <div className='flex'>
                                    <MdVerified size={Width< 631 ? 35:40} className='text-green-400 ml-2'/>
                                </div>
							</div>
						</motion.div>
					</div>

					<div className="grid content-center gap-4">
						<motion.div
                        ref={ref}
                        variants={{
                          hidden:{opacity:0,x:75,y:-45},
                          visible:{opacity:1,x:0,y:0},
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{duration:0.7,delay:0.55}}  
                        className="p-6 rounded shadow-md bg-blue-200/60">
							<p>I had an excellent experience with this bike service. They were efficient, professional, and clearly experts in their field. They managed to fix my bike quickly and even gave me some helpful maintenance tips. The service was reasonably priced, and I felt valued as a customer. Definitely a go-to place for all bike-related needs!</p>
							<div className="flex justify-between mt-4 space-x-4">
                            <div className='flex'>
                            <img src="https://img.freepik.com/premium-vector/anonymous-user-profile-avatar-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Photo7" className="w-12 h-12 bg-center bg-cover rounded-full" />

								<div className='flex-col ml-4'>
									<p className="text-lg font-semibold">Sathish</p>
									<p className="text-sm text-gray-400">KTM RC 390</p>
								</div>
                                </div>
                                <div className='flex'>
                                    <MdVerified size={Width< 631 ? 35:40} className='text-green-400 ml-2'/>
                                </div>
							</div>
						</motion.div>

						<motion.div
                        ref={ref}
                        variants={{
                          hidden:{opacity:0,x:75,y:45},
                          visible:{opacity:1,x:0,y:0},
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{duration:0.8,delay:0.75}} 
                        className="p-6 rounded shadow-md bg-blue-200/30">
							<p>Fantastic service from start to finish! The mechanics were friendly and took great care in handling my bike. They communicated clearly about what repairs were needed and why. I was impressed with their attention to detail and how they went the extra mile to ensure everything was perfect. I’ll be coming back for all my future bike services.</p>
							<div className="flex justify-between mt-4 space-x-4">
                            <div className='flex'>
                            <img src="https://img.freepik.com/premium-vector/anonymous-user-profile-avatar-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Photo10" className="w-12 h-12 bg-center bg-cover rounded-full" />

								<div className='flex-col ml-4'>
									<p className="text-lg font-semibold">Arawind</p>
									<p className="text-sm text-gray-400">Suzuki Hayabusa</p>
								</div>
                                </div>
                                <div className='flex'>
                                    <MdVerified size={Width< 631 ? 35:40} className='text-green-400 ml-2'/>
                                </div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>)}
	
</section>
<div className='w-[70%]  h-[2px] bg-gradient-to-r from-blue-400 to-violet-500'></div>
    </div>
  )
}

export default Review