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
