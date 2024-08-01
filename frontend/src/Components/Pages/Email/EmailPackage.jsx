import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useAnimation, useInView, motion } from 'framer-motion';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image2 from '../../../images/Booking/b2.png';
import Lottie from 'react-lottie';
import bookingAnimation from '../../../images/Animation/signup.json';
import { useNavigate } from 'react-router-dom';

// Service details for different packages
const serviceDetails = {
  "Basic Care Package - ₹5,000": [
    "Basic Care Package - ",
    "General service check-up",
    "Oil change",
    "Suspension adjustment"
  ],
  "Premium Care Package - ₹11,000": [
    "Premium Care Package - ",
    "Two General service check-ups",
    "Two Oil changes",
    "Two Water washes"
  ],
  "Complete Care Package - ₹6,500": [
    "Complete Care Package - ",
    "General service check-up",
    "Oil change",
    "Water wash"
  ]
};

const Contact = () => {
  const ref = useRef(); // Ref to track element visibility
  const isInView = useInView(ref); // Hook to check if element is in view
  const mainControlls = useAnimation(); // Animation controls
  const navigate = useNavigate(); // Hook to navigate between pages

  // Start animation when the element is in view
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  const form = useRef(); // Ref to the form element
  const [selectedService, setSelectedService] = useState(""); // State to track selected service
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone_number: "",
    message: "",
  });
  const [showAnimation, setShowAnimation] = useState(false); // State to show animation after booking

  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.from_name || !formData.from_email || !formData.phone_number || !selectedService) {
      toast.error("Please fill all the required fields.");
      return;
    }

    // Validate phone number
    if (formData.phone_number.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    emailjs
      .sendForm(
        "service_woh6htb", // EmailJS service ID
        "template_vkp0tjl", // EmailJS template ID
        form.current, // Reference to the form element
        "b_Y-fjoLatRSQaZEI" // EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your selected package has been successfully booked!");
          setShowAnimation(true); // Show animation upon successful booking
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred. Please try again.");
        }
      );
  };

  // Function to handle service selection
  const selectService = (service) => {
    setSelectedService(service);
    // Format service details for the message
    const details = serviceDetails[service].join(", ");
    setFormData({ ...formData, message: details });
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle back button click
  const handleBackClick = () => {
    navigate('/services'); // Navigate to the home page or previous page
  };

  // Lottie animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bookingAnimation, // Set animation data
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="max-w-screen overflow-hidden font-poppins">
      {showAnimation ? (
        <div className="flex flex-col justify-center items-center h-screen">
          {/* Display animation and back button if showAnimation is true */}
          <Lottie options={defaultOptions} height={400} width={400} />
          <button 
            onClick={handleBackClick} // Handle back button click
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      ) : (
        <>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: -75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h1 className="mt-[4%] flex justify-center text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold sm:text-7xl text-xl">
              Book your service package now!
            </h1>
            <p className="mt-[2%] font-semibold uppercase text-lg text-center text-gray-600 leading-4">
              PACKAGE SCHEDULING
            </p>
          </motion.div>

          <div className="mt-[3%] grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControlls}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold leading-tight lg:text-[40px]">
                  Choose Your Package Now!
                </h2>
                <div className="dark:text-gray-600">Get set for a seamless ride…</div>
              </div>
              <img src={Image2} alt="Image2" className="ml-10 mt-[2%] h-60 w-60 md:h-80 md:w-80" />
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
              className="max-w-md mx-auto p-4"
            >
              <ToastContainer />
              <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
                <label className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label className="block text-lg font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Enter your 10-digit phone number"
                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <label className="block text-lg font-medium text-gray-700">
                  Service
                  <span>
                    <p className="text-[15px] text-red-600">*Select the Service</p>
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Basic Care Package - ₹5,000", "Premium Care Package - ₹11,000", "Complete Care Package - ₹6,500"].map(
                    (service) => (
                      <button
                        key={service}
                        type="button"
                        className={`px-4 py-2 rounded-md border ${
                          selectedService === service
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                        }`}
                        onClick={() => selectService(service)}
                      >
                        {service}
                      </button>
                    )
                  )}
                </div>
                <input type="hidden" name="message" value={formData.message} />
                <input
                  type="submit"
                  value="Confirm Service"
                  className="mt-6 cursor-pointer bg-green-400 text-white border-none py-2 px-4 rounded-md hover:bg-green-500"
                />
              </form>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
