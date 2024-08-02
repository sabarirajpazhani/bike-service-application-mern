# cart_rabbit

![heroImage1](https://github.com/user-attachments/assets/9c666b23-ef36-4649-a898-ee7a486d6184)

# Bike Service Application

This bike service application streamlines scheduling and managing bike maintenance, featuring secure user authentication, service booking, and profile management. Users can choose from various service packages, receive real-time notifications, and engage with animations and popup messages for actions like successful bookings. When a service or package is booked, both the owner and customer receive emails with booking details and confirmation, respectively. The frontend uses React.js, styled with Tailwind CSS, and tools like EmailJS, React-toastify, Framer Motion, and React-lottie. The backend is built with Node.js and Express.js, using MongoDB with Mongoose for the database and Bcrypt.js for password encryption, while Firebase stores contact information.

## Responsive Frontend & Backend Demonstrative Videos

Explore the Bike Service Application in action on various devices by watching the demonstration videos below:

### Desktop View

See the desktop view demonstration of the Waiting List Application running on localhost:

[Desktop View Video]

### Mobile View

See the mobile view demonstration of the Waiting List Application running on localhost:

[Mobile View Video]

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
- **EmailJS**: For sending emails directly from the client-side.
- **React-toastify**: For real-time toast notifications.
- **Framer Motion**: For smooth and interactive animations.
- **React-lottie**: For rendering engaging Lottie animations.

### Backend
- **Node.js with Express.js**: For server-side functionality and API handling.
- **MongoDB with Mongoose**: For managing user data and service bookings.
- **Bcrypt.js**: For secure password hashing.

### Other Tools
- **Firebase**: For storing customer contact information and real-time data synchronization.

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


## File Structure

The project is organized into two main directories: backend and frontend. Below is the file structure for the project:


![Screenshot 2024-08-02 145717](https://github.com/user-attachments/assets/40e5586e-e1d3-4cbd-b61e-d2ff5aea29a4)













