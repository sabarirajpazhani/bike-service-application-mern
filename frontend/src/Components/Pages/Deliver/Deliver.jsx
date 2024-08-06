import React, { useState, useRef, useEffect } from 'react';  // Import icons from 'react-icons/hi' for displaying location, phone, and email icons
import Navbar from '../../Navigation/Navbar';  // Import custom Navbar component for navigation
import Footer from '../../Footer/Footer';   // Import custom Footer component to be displayed at the bottom of the page
// Import Firebase database configuration and Firestore functions for interacting with the database
import { useAnimation, useInView, motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';   // Import ToastContainer and toast from 'react-toastify' for displaying notifications
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for react-toastify notifications
import Image1 from '../../../images/deliver.png';
import emailjs from "@emailjs/browser";   // Import EmailJS

function Contact() { 
    const ref = useRef(); // Create a reference for the container to check if it's in view
    const isInView = useInView(ref); // Check if the container is in view using useInView
    const mainControlls = useAnimation(); // Initialize animation controls using useAnimation
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "" });

    useEffect(() => {  
        if (isInView) {  
            mainControlls.start("visible"); // Start animation when the container is in view
        }
    }, [isInView]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!formData.name || !formData.email || !formData.phone || !formData.service) {
            toast.error("Please fill all the required fields.");
            return;
        }

        // Validate phone number
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error("Please enter a valid 10-digit phone number.");
            return;
        }

        // Send email using EmailJS
        emailjs.send(
            'service_gbw806h',
            'template_f9fon7l',
            formData,
            'KVBw83s3wujFjSg8B'
        )
        .then((result) => {
            console.log(result.text);
            toast.success("Email sent successfully!");
        }, (error) => {
            console.log(error.text);
            toast.error("An error occurred. Please try again.");
        });

        // Clear form fields
        setFormData({ name: "", email: "", phone: "", service: "" });
    };

    return (
        <>
          <ToastContainer />
          
          <div className="max-w-screen ml-50 overflow-hidden font-poppins flex items-center justify-center min-h-screen">
            <Navbar />
            <section className="max-w-screen-xl sm:mt-20 mt-10 grid-cols-1 gap-8 px-4 py-5 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-300 dark:text-gray-800">
              <div 
              className="grid max-h-screen grid-cols-1 px-7vmt-10 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <motion.div 
                ref={ref}
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="py-6 mt-[5%] md:py-0 md:px-6">
                  <h1 className="text-4xl font-bold">Deliver Service...</h1>
                  <p className="pt-2 pb-4">This is only for the BikeBlitz Team</p>
                  <div className="space-y-4c mr-10 ">
                  <img src={Image1} alt="Image1" className="object-cover rounded-lg " />
                  </div>
                  
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
                >
                <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6" onSubmit={handleSubmit}>
                  <div className="space-y-1 mt-10 text-sm">
                    <label className="block dark:text-gray-600">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="name"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="phone"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Service Name</label>
                    <input
                      type="text"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="service"
                      className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                    />
                  </div>
                  <button
                    type="submit"
                    className="self-center text-white px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-400 text-white0 hover:bg-green-500"
                  >
                    Submit
                  </button>
                </form>
                </motion.div>
              </div>
            </section>
          </div>
          <Footer />
        </>
      );
    }
    
    export default Contact;
