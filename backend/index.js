const express = require("express"); // Importing the Express library to create the server
const mongoose = require('mongoose'); // Importing mongoose library for MongoDB operations
const cors = require("cors"); // Importing CORS middleware to handle cross-origin requests
const bcrypt = require('bcrypt'); // Importing bcrypt library for password encryption
const CustomerModel = require('./models/Customer'); // Importing the Customer model


const app = express(); // Creating an Express application
const port =process.env.PORT || 4000;
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Middleware to enable CORS

mongoose.connect("mongodb://127.0.0.1:27017/customer"); // Connecting to the MongoDB database

app.post("/login", (req, res) => { // Defining a POST route for user login
    const { email, password } = req.body; // Extracting email and password from the request body
    CustomerModel.findOne({ email: email }) // Finding a user with the provided email
        .then(user => { // Handling the promise returned by findOne
            if (user) { // Checking if user exists
                bcrypt.compare(password, user.password, (err, result) => { // Comparing the provided password with the hashed password
                    if (result) { // If the password matches
                        res.json("Success"); // Sending success response
                    } else {
                        res.json("The password is incorrect"); // Sending error response if password is incorrect
                    }
                });
            } else {
                res.json("No record existed"); // Sending error response if user doesn't exist
            }
        })
        .catch(err => res.status(500).json(err)); // Handling any errors that occur during the process
});

app.post('/register', (req, res) => { // Defining a POST route for user registration
    const { email, password, username } = req.body; // Extracting email, password, and username from the request body
    CustomerModel.findOne({ email: email }) // Finding a user with the provided email
        .then(user => { // Handling the promise returned by findOne
            if (user) { // Checking if user already exists
                res.status(400).json("User with this email already exists"); // Sending error response if user exists
            } else {
                bcrypt.hash(password, 10, (err, hashedPassword) => { // Hashing the password with bcrypt
                    if (err) {
                        res.status(500).json(err); // Handling any errors that occur during hashing
                    } else {
                        CustomerModel.create({ email, password: hashedPassword, username }) // Creating a new user with the hashed password
                            .then(customer => res.json(customer)) // Sending success response with the created user data
                            .catch(err => res.status(500).json(err)); // Handling errors during user creation
                    }
                });
            }
        })
        .catch(err => res.status(500).json(err)); // Handling any errors that occur during the process
});



// Endpoint to handle booking data
app.post("/bookings", (req, res) => {
    const { from_name, from_email, phone, service } = req.body; // Extracting data from the request body

    // Create a new booking
    BookingModel.create({ from_name, from_email, phone, service })
        .then(booking => res.json(booking)) // Send success response with booking data
        .catch(err => res.status(500).json({ message: "Error saving booking data", error: err })); // Send error response
});


app.listen(3001, () => { // Starting the server on port 3001
    console.log("server is running"); // Logging that the server is running
});
