import React, { useState, useRef, useEffect } from 'react';
// Importing image, animation libraries, and required components
import Image1 from '../../../images/login.png'; // Login page image
import { useAnimation, useInView, motion } from 'framer-motion'; // Animation libraries
import { Link, useNavigate } from 'react-router-dom'; // Navigation components
import axios from 'axios'; // HTTP client for making API requests
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Eye icons for password visibility toggle
import { toast, ToastContainer } from 'react-toastify'; // Toast notification components
import Lottie from 'react-lottie'; // Lottie for animations
import 'react-toastify/dist/ReactToastify.css'; // Toast notification CSS
import loginAnimation from '../../../images/Animation/signup.json'; // Lottie animation for login

const Login = () => {  
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

    // State variables for email, password, password visibility, and animation display
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const navigate = useNavigate();

    // Validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submission for login
    const handleSubmit = (e) => {
        e.preventDefault();

         // Check if email and password are filled
         if (!email || !password) {
            toast.error("Please fill all the required fields.");
            return;
        }

        // Check if email format is correct
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    setShowAnimation(true); // Show animation on successful login
                    setTimeout(() => navigate('/services'), 2000); // Redirect to homepage after 2 seconds
                } else {
                    toast.error("You don't have an account. Sign up now to access our services and enjoy personalized features!"); // Show error toast for unsuccessful login
                }
            })
            .catch(err => {
                console.log(err);
                toast.error("Login failed. Please try again."); // Show error toast for network errors
            });
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Lottie animation options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="max-w-screen overflow-hidden font-poppins">
            <ToastContainer /> {/* Container for toast notifications */}
            {showAnimation ? (
                <div className="flex justify-center items-center h-screen">
                    <Lottie options={defaultOptions} height={400} width={400} /> {/* Lottie animation on successful login */}
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
                            Log in to BikeBlitz to resume your service
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
                            <img src={Image1} alt="Login" className="object-cover rounded-lg w-full h-full" /> {/* Login page image */}
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
                                <h1 className="text-2xl font-bold text-center">Login</h1>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-1 text-sm">
                                        <label className="block dark:text-gray-600">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-1 text-sm relative">
                                        <label className="block dark:text-gray-600">Password</label>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="Password"
                                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-[60%] text-lg transform -translate-y-1/2 dark:text-gray-600">
                                            {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Toggle password visibility icon */}
                                        </button>
                                    </div>

                                    <button type="submit" className="block w-full p-3 text-center bg-green-400 text-white border-none py-2 px-4 rounded-md hover:bg-green-500">Login</button> {/* Login button */}
                                </form>

                                <div className="flex flex-col items-center space-y-4 mt-4">
                                    <div className="flex items-center space-x-1 w-full">
                                        <div className="flex-1 h-px dark:bg-gray-400"></div>
                                        <p className="px-3 text-sm dark:text-gray-600">Don't have an Account?</p>
                                        <div className="flex-1 h-px dark:bg-gray-400"></div>
                                    </div>
                                    <Link to="/register" className="block w-full p-3 text-center bg-green-400 text-white border-none py-2 px-4 rounded-md hover:bg-green-500">Signup</Link> {/* Link to signup page */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Login;
