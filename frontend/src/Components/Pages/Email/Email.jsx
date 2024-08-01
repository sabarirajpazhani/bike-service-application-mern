import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";   // Importing emailjs for email sending functionality
import { ToastContainer, toast } from "react-toastify";  // Importing ToastContainer and toast for notifications
import { useAnimation, useInView, motion } from 'framer-motion';
import "react-toastify/dist/ReactToastify.css";
import Image1 from '../../../images/Booking/b1.png';
import Lottie from 'react-lottie';    // Importing Lottie for animations
import loginAnimation from '../../../images/Animation/signup.json';  // Importing a Lottie animation
import { useNavigate } from 'react-router-dom';  // Importing useNavigate for navigation

const Contact = () => {
    const ref = useRef();  // Creating a ref for animations
    const isInView = useInView(ref);  // Checking if the element is in view
    const mainControlls = useAnimation(); // Animation controls
    const navigate = useNavigate();
    const form = useRef();
    const [selectedService, setSelectedService] = useState("");   // State for selected service
    const [formData, setFormData] = useState({  // State for form data
        from_name: "",
        from_email: "",
        phone: "",
        message: "",
    });
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        if (isInView) {
            mainControlls.start("visible");   // Start animation if in view
        }
    }, [isInView]);

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if all required fields are filled
        if (!formData.from_name || !formData.from_email || !formData.phone || !selectedService) {
            toast.error("Please fill all the required fields.");
            return;
        }

        // Validate phone number
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error("Please enter a valid 10-digit phone number.");
            return;
        }

        // Send form data using emailjs
        emailjs
            .sendForm(
                "service_3p434wp",
                "template_ksbc2cc",
                form.current,
                "3ubrd_BwR6Gum05AP"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Your selected service has been successfully booked!");
                    setShowAnimation(true);
                },
                (error) => {
                    console.log(error.text);
                    toast.error("An error occurred. Please try again.");
                }
            );
    };

    const selectService = (service) => {
        setSelectedService(service);
        setFormData({ ...formData, message: service });  // Update form data with selected service
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });   // Update form data on input change
    };

    const handleBackClick = () => {
        navigate('/services');   // Navigate to services page
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimation,   // Lottie animation data
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="max-w-screen overflow-hidden font-poppins">
            {showAnimation ? (
                <div className="flex justify-center items-center h-screen">
                    <Lottie options={defaultOptions} height={400} width={400} />
                    <button 
                        onClick={handleBackClick}
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
                            Schedule your bike's service today!
                        </h1>
                        <p className="mt-[2%] font-semibold uppercase text-lg text-center text-gray-600 leading-4">
                            SERVICE SCHEDULING
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
                                <h2 className="text-4xl font-bold leading-tight lg:text-[40px]">
                                    Let's Book the Services !!
                                </h2>
                                <div className="dark:text-gray-600">Ready for a smoother ride...</div>
                            </div>
                            <img src={Image1} alt="Image1" className="ml-10 mt-[2%] h-60 w-60 md:h-80 md:w-80" />
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
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <label className="block text-lg font-medium text-gray-700">
                                    Service
                                    <span>
                                        <p className="text-[15px] text-red-600">*Select the Service</p>
                                    </span>
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {["Water Wash - ₹150", "Oil Change - ₹1,000", "General Service Check-up - ₹800"].map(
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
                                <input type="hidden" name="message" value={selectedService} />
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
