import './App.css'; // Importing the App stylesheet
import React from 'react'; // Importing React
import {BrowserRouter, Routes, Route} from 'react-router-dom'; // Importing BrowserRouter, Routes, and Route for routing
import Homepage from '../src/Components/Pages/Homepage/Homepage'; // Importing Homepage component
import About from '../src/Components/Pages/About/About'; // Importing About component
import Services from '../src/Components/Pages/Services/Services'; // Importing Services component
import Contact from '../src/Components/Pages/Contact/Contact'; // Importing Contact component
import Email from '../src/Components/Pages/Email/Email'; // Importing Email component
import EmailPackage from '../src/Components/Pages/Email/EmailPackage'; // Importing EmailPackage component
import Signup from '../src/Components/Pages/Signup/Signup'; // Importing Signup component
import Login from '../src/Components/Pages/Login/Login'; // Importing Login component
import Profile from '../src/Components/Pages/Profile/Profile'; // Importing Profile component

function App() {
  return (
    <BrowserRouter>  
      <Routes> 
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/services" element={<Services/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/booking" element={<Email/>}/> 
        <Route path="/packagebooking" element={<EmailPackage/>}/> 
        <Route path="/register" element={<Signup/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/profile" element={<Profile/>}/> 
      </Routes> 
    </BrowserRouter> // End of BrowserRouter
  );
}

export default App; // Exporting the App component
