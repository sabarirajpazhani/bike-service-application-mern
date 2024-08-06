# cart_rabbit

![git](https://github.com/user-attachments/assets/d711e5da-26bd-4a48-827d-2acd394bb5a7)

# Bike Service Application

This bike service application streamlines scheduling and managing bike maintenance, featuring secure user authentication, service booking, and profile management. Users can choose from various service packages, receive real-time notifications, and engage with animations and popup messages for actions like successful bookings. When a service or package is booked, both the owner and customer receive emails with booking details and confirmation, respectively. The frontend uses React.js, styled with Tailwind CSS, and tools like EmailJS, React-toastify, Framer Motion, and React-lottie. The backend is built with Node.js and Express.js, using MongoDB with Mongoose for the database and Bcrypt.js for password encryption, while Firebase stores contact information.

## Responsive Frontend & Backend Demonstrative Videos

Explore the Bike Service Application in action on various devices by watching the demonstration videos below:

### Desktop View

See the desktop view demonstration of the Waiting List Application running on localhost:

[Desktop View Video](https://drive.google.com/file/d/1GGBsZ9nwaoDA26lt8NVMMeajmEP4ALiZ/view?usp=sharing )

### Mobile View

See the mobile view demonstration of the Waiting List Application running on localhost:

[Mobile View Video](https://drive.google.com/file/d/1OFcdbQ82jj1vvAG61EkQxoceo4ohsxGu/view?usp=sharing)

## Features

- **User Authentication**: Secure login and registration functionality.
- **Service Booking**: Book various bike maintenance services like water wash, oil change, and general check-up.
- **Service Packages**: Select from multiple service packages for comprehensive bike care.
- **Real-Time Notifications**: Receive notifications about service bookings and updates.
- **Email Notifications**: Automated email messages for booking confirmations and updates.
- **Animation and User Feedback**: Engage users with animations and popup messages for actions like successful bookings.

## Technologies Used

### Frontend
- **React.js**: For building dynamic and responsive user interfaces.
- **Tailwind CSS**: For flexible and customizable styling.
- **React-toastify**: For real-time toast notifications.
- **Framer Motion**: For smooth and interactive animations.
- **React-lottie**: For rendering engaging Lottie animations.

![Screenshot 2024-08-02 175822](https://github.com/user-attachments/assets/938fca4d-526b-46a0-9ce5-d6be5c9c7338)

  
### Backend
- **Node.js with Express.js**: For server-side functionality and API handling.
- **MongoDB with Mongoose**: For managing user data and service bookings.
- **Bcrypt.js**: For secure password hashing.

![Screenshot 2024-08-02 181857](https://github.com/user-attachments/assets/4acd6e4e-035a-4afa-a52b-b4c9ff7603b3)


### Tools Used
- **Firebase**: For storing customer contact information and real-time data synchronization.
- **EmailJS**: For sending emails directly from the client-side.

![Screenshot 2024-08-02 182632](https://github.com/user-attachments/assets/24e17a34-d77e-46c1-ba30-169b1846d018)


## API Endpoints

This project includes several API endpoints to manage user interactions and service bookings. The endpoints cover functionalities such as user authentication, service booking, and user registration. Below are the key API endpoints:

1.*Authentication*
- **POST /login**: Authenticates users based on their email and password.
- **POST /register**: Registers a new user with email and password.

2.*Service Booking*
- **POST /book-service**: Books a specific bike service, such as water wash or oil change. Includes handling of service details and customer information.

3.*Additional Endpoints*
- **GET /profile**: Retrieves user profile information.
- **PUT /profile**: Updates user profile information.

### Email Notifications

When a service or package is booked, both the owner and customer receive email notifications:

- **Owner**: Receives detailed booking information.
  
- **Customer**: Receives a confirmation of their booking.

### Email Configuration

**Owner**
![Screenshot 2024-08-02 143744](https://github.com/user-attachments/assets/e472ae47-3ac4-4621-af5a-a230fda1e54e)

**Customer**
![Screenshot 2024-08-02 143806](https://github.com/user-attachments/assets/5f750c29-ad26-494e-ba72-a5216e7d661e)

### Email Code
```javascript
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
```

### Bike Delivery Service Notification

In our bike service application, we've implemented a feature that sends an automated notification email to customers when their bike service is complete and their bike is ready for delivery. This ensures timely and efficient communication, enhancing customer satisfaction by keeping them informed about the status of their service. 

**Deliver Email Configuration**
```javascript
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
```
![image](https://github.com/user-attachments/assets/53397128-187a-4bd3-899e-44adae9a3a47)

**Deliver Message**
![image](https://github.com/user-attachments/assets/303c68d0-0ef3-4e3c-8081-d257ff5bb190)



### Web Pages Used in This Project

- **Homepage**: Provides an overview of the bike service application, highlighting key features and navigation to other sections.
- **About**: Details the purpose of the bike service application and its benefits.
- **Services**: Lists and describes the available bike maintenance services and packages, including water wash, oil change, general check-ups, and comprehensive service packages.
- **Signup**: Allows new users to create an account and register for the service.
- **Login**: Enables existing users to log in and access their accounts.
- **Service Booking for Packages**: Interface for users to book comprehensive service packages that include multiple services.
- **Service Booking for Individual Services**: Interface for users to book specific bike maintenance services individually.
- **Profile**: Page where users can view and update their personal information and manage their account details.

### MongoDB Configuration

This application uses MongoDB for database operations. The `mongoose` library is used to connect to and interact with MongoDB.

- **Database URL**: The application connects to MongoDB at `mongodb://127.0.0.1:27017/customer`.
- **Database Name**: `customer`

In the code:

```javascript
const mongoose = require('mongoose'); // Importing mongoose library for MongoDB operations

mongoose.connect("mongodb://127.0.0.1:27017/customer"); // Connecting to the MongoDB database
```
![Screenshot 2024-08-02 145152](https://github.com/user-attachments/assets/b39a7bd0-6e74-443d-b1f0-5120ee2ee06f)

## API Integration

Axios is used to make API requests to the backend for functionalities such as user login, registration, and service booking. Below is an example of how to set up Axios for making these requests:

```javascript
import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:3001'; // Adjust the URL according to your backend configuration

// Function to handle user login
const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        console.log('Login Success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Login Error:', error.response.data);
        throw error;
    }
};

// Function to handle user registration
const register = async (email, password, username) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { email, password, username });
        console.log('Registration Success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Registration Error:', error.response.data);
        throw error;
    }
};

// Function to book a service
const bookService = async (serviceData) => {
    try {
        const response = await axios.post(`${API_URL}/book-service`, serviceData);
        console.log('Service Booking Success:', response.data);
        return response.data;
    } catch (error) {
        console.error('Service Booking Error:', error.response.data);
        throw error;
    }
};
```

## MongoDB Configuration for Delivery Messages

Our bike service application uses MongoDB to manage and store delivery messages related to customer service notifications. The MongoDB configuration ensures efficient handling and retrieval of these messages.

1. **Database Connection**
   
   ```javascript
   const mongoose = require('mongoose');
   mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   }).then(() => {
   console.log('Connected to MongoDB');
   }).catch((err) => {
   console.error('MongoDB connection error:', err);
   });
   ```
2. **Model Definition**

   ```javascript
   const mongoose = require('mongoose'); // Importing mongoose library for MongoDB operations

   const BookingSchema = new mongoose.Schema({ // Defining a new Mongoose schema for booking data
    from_name: String, // Customer name
    from_email: String, // Customer email
    phone: String, // Customer phone
    service: String, // Selected service
    booked_at: { type: Date, default: Date.now } // Timestamp for booking
    });

   const BookingModel = mongoose.model("bookings", BookingSchema); // Creating a Mongoose model for bookings collection
   module.exports = BookingModel; // Exporting the BookingModel
   ```
3. **Usage**
   ```javascript
   const DeliveryMessage = require('./models/DeliveryMessage');

   const createDeliveryMessage = async (email, serviceId, message) => {
    const deliveryMessage = new DeliveryMessage({
    customerEmail: email,
    serviceId: serviceId,
    message: message,
    status: 'pending',
    });
  
    await deliveryMessage.save();
    console.log('Delivery message saved:', deliveryMessage);
   };
   ```

![image](https://github.com/user-attachments/assets/27159959-2505-48b7-bd76-5fd772df648d)


## File Structure

The project is organized into two main directories: backend and frontend. Below is the file structure for the project:


![Screenshot 2024-08-02 145717](https://github.com/user-attachments/assets/40e5586e-e1d3-4cbd-b61e-d2ff5aea29a4)


This section offers a concise overview of the project's file structure, aiding contributors and users in navigating and understanding the codebase.

## Deployment

### Clone the repository:
```bash
git clone https://github.com/yourusername/bike-service-application.git
```

### Navigate to the project directory:
```bash
cd frontend
```

### Install dependencies for the frontend and backend:
```bash
# Install frontend dependencies
npm install

# Navigate to the backend directory
cd backend

# Install backend dependencies
npm install
```

### Start the backend server:
```bash
cd backend
npm start
```

### Start the frontend development server:
```bash
cd ..
npm start
```

### Open your browser and navigate to:
```bash
http://localhost:3000
```

## Conclusion

The Bike Service Application is a comprehensive platform designed to streamline bike maintenance and service scheduling. It offers users an intuitive interface for booking various bike services, selecting service packages, and managing their profiles.

Key features include secure user authentication, real-time notifications, and engaging animations for enhanced user experience. The application leverages modern technologies such as React.js, Tailwind CSS, and Firebase to deliver a responsive and dynamic solution.

With a robust backend built using Node.js, Express.js, and MongoDB, the project ensures efficient handling of data and secure user interactions. This application not only meets the requirements of a bike service management system but also provides a scalable foundation for future enhancements.

Thank you for considering this project for your interview selection. I am confident that it demonstrates my ability to develop full-stack applications and utilize a range of technologies effectively.













