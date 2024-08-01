const mongoose = require('mongoose'); // Importing mongoose library for MongoDB operations

const CustomerSchema = new mongoose.Schema({ // Defining a new Mongoose schema for customer data
    username: String, // Customer username field of type String
    email: String, // Customer email field of type String
    password: String // Customer password field of type String
});

const CustomerModel = mongoose.model("customers", CustomerSchema); // Creating a Mongoose model for customers collection using the defined schema
module.exports = CustomerModel; // Exporting the CustomerModel for use in other parts of the application
