import React, { useState, useRef, useEffect } from 'react';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';    // Import icons from 'react-icons/hi' for displaying location, phone, and email icons
import Navbar from '../../Navigation/Navbar';  // Import custom Navbar component for navigation
import Footer from '../../Footer/Footer';   // Import custom Footer component to be displayed at the bottom of the page
// Import Firebase database configuration and Firestore functions for interacting with the database
import { db } from '../../../../src/firebase';
import { useAnimation, useInView, motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';   // Import ToastContainer and toast from 'react-toastify' for displaying notifications
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for react-toastify notifications


function Contact() { 
  // Refs and animation controls
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();

  // Animation effect when component is in view
  useEffect(() => {
    if (isInView) {  
        mainControlls.start("visible");
    }
}, [isInView]);

  // State hooks to manage form input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name || !phone || !email || !message) {
      toast.error("Please fill out all fields."); // Show error if fields are empty
      return;
    }
    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      // Add the form data to the "contacts" collection in Firestore
      await addDoc(collection(db, "contacts"), {
        name: name,
        phone: phone,
        email: email,
        message: message
      });
      // Show success message and clear form fields
      toast.success("Thank you for reaching out! Our BikeBlitz team will be in touch with you shortly.");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // Show error message if there is an issue with adding data
      toast.error(`Error: ${error.message}`);
    }
  }

  return (
    <>
      <ToastContainer />
      
      <div className="max-w-screen ml-50 overflow-hidden font-poppins flex items-center justify-center min-h-screen">
        <Navbar />
        <section className="max-w-screen-xl sm:mt-20 grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-300 dark:text-gray-800">
          <div 
          className="grid max-h-screen grid-cols-1 px-7 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <motion.div 
            ref={ref}
            variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="py-6 mt-[25%] md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Contact Us....</h1>
              <p className="pt-2 pb-4">Fill out the form below to start a conversation.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <HiLocationMarker className="w-5 h-5 mr-2 sm:mr-6" />
                  <span>No: 12, W Power House Rd, Tatabad, Coimbatore,</span>
                </p>
                <p className="flex items-center">
                  <HiPhone className="w-5 h-5 mr-2 sm:mr-6" />
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <HiMail className="w-5 h-5 mr-2 sm:mr-6" />
                  <span>contact@business.com</span>
                </p>
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
            <form onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-600">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block dark:text-gray-600">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="message" className="block dark:text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Your message"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="self-center text-white px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-400 text-white0   hover:bg-green-500"
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
