import React from 'react';
// Importing components for different sections of the homepage
import Navbar from '../../Navigation/Navbar'; // Navigation bar component
import Herosection from '../../HeroSection/Herosection'; // Hero section component
import Features from '../../../Features/Features'; // Features section component
import CardComponent from '../../Package/CardComponent'; // Service packages card component
import CallToAction from '../../CallToAction/CallToAction'; // Call to action section component
import Review from '../../Review/Review'; // Customer reviews section component
import Footer from '../../Footer/Footer'; // Footer component

// Homepage component
function Homepage() {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />
      {/* Render the Herosection component */}
      <Herosection />
      {/* Render the Features component */}
      <Features />
      {/* Render the CardComponent (service packages) */}
      <CardComponent />
      {/* Render the CallToAction component */}
      <CallToAction />
      {/* Render the Review component */}
      <Review />
      {/* Render the Footer component */}
      <Footer />
    </>
  );
}

export default Homepage;
