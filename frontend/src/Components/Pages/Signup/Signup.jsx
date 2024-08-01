import React, { useState, useRef, useEffect } from 'react'; // Import necessary hooks from React
import Image1 from '../../../images/signup.png'; // Import signup image
import { useAnimation, useInView, motion } from 'framer-motion'; // Import framer-motion for animations
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom for navigation
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons for password visibility toggle
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer from react-toastify
import Lottie from 'react-lottie'; // Import Lottie for animations
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS
import successAnimation from '../../../images/Animation/signup.json'; // Import Lottie animation for success

const Signup = () => {
    const ref = useRef(); // Create a reference for the container to check if it's in view
    const isInView = useInView(ref); // Check if the container is in view using useInView
    const mainControlls = useAnimation(); // Initialize animation controls using useAnimation
    useEffect(() => {  
        if (isInView) {  
            mainControlls.start("visible"); // Start animation when the container is in view
        }
    }, [isInView]);

    const [username, setUsername] = useState(''); // State for username
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const [showAnimation, setShowAnimation] = useState(false); // State for showing success animation
    const navigate = useNavigate(); // Initialize navigation

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validation
        if (!username || !email || !password) {
            toast.error("Please fill in all fields."); // Show error toast if any field is empty
            return;
        }

        // Check if email format is correct
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Send registration data to the server
        axios.post('http://localhost:3001/register', { username, email, password })
            .then(result => {
                console.log(result);
                setShowAnimation(true); // Show success animation on successful registration
                setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    toast.error("Email already registered. Please click 'Login' to access your account."); // Show error toast if email is already registered
                } else {
                    toast.error("Registration failed. Please try again."); // Show error toast for other errors
                }
                console.log(err);
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="max-w-screen overflow-hidden font-poppins">
            <ToastContainer /> {/* Container for displaying toast messages */}
            {showAnimation ? (
                <div className="flex justify-center items-center h-screen">
                    <Lottie options={defaultOptions} height={400} width={400} /> {/* Show success animation */}
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
                        className="flex justify-center text-center"
                    >
                        <h1 className="mt-[4%] flex justify-center text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 font-extrabold sm:text-7xl text-xl">
                            Join BikeBlitz for top-notch bike service! {/* Signup page header */}
                        </h1>
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
                            <img src={Image1} alt="Image1" className="object-cover rounded-lg w-full h-full" /> {/* Signup image */}
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
                            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-200/90 dark:text-gray-800">
                                <h1 className="text-2xl font-bold text-center">Register</h1> {/* Register header */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-1 text-sm">
                                        <label className="block dark:text-gray-600">Username</label> {/* Username input label */}
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="Username"
                                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                            onChange={(e) => setUsername(e.target.value)} // Update username state
                                        />
                                    </div>

                                    <div className="space-y-1 text-sm">
                                        <label className="block dark:text-gray-600">Email</label> {/* Email input label */}
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                            onChange={(e) => setEmail(e.target.value)} // Update email state
                                        />
                                    </div>

                                    <div className="space-y-1 text-sm relative">
                                        <label className="block dark:text-gray-600">Password</label> {/* Password input label */}
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                            onChange={(e) => setPassword(e.target.value)} // Update password state
                                        />
                                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-[60%] text-lg transform -translate-y-1/2 dark:text-gray-600">
                                            {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Toggle password visibility */}
                                        </button>
                                    </div>

                                    <button className="block w-full p-3 text-center bg-green-400 text-white border-none py-2 px-4 rounded-md hover:bg-green-500">Sign up</button> {/* Signup button */}
                                </form>

                                <div className="flex flex-col items-center space-y-4 mt-4">
                                    <div className="flex items-center space-x-1 w-full">
                                        <div className="flex-1 h-px dark:bg-gray-400"></div>
                                        <p className="px-3 text-sm dark:text-gray-600">Already Have an Account?</p> {/* Login prompt */}
                                        <div className="flex-1 h-px dark:bg-gray-400"></div>
                                    </div>
                                    <Link to="/login" className="block w-full p-3 text-center bg-green-400 text-white border-none py-2 px-4 rounded-md hover:bg-green-500">Login</Link> {/* Login button */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Signup; // Export Signup component
