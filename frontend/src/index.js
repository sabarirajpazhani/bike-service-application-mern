import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering components
import './index.css'; // Importing global CSS styles
import App from './App'; // Importing the main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root for React rendering using the 'root' element
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
