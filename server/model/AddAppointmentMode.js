//Products

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({

    PId: {
        type: String,
    },

    FirstName: {
        type: String,
    },

    LastName: {
        type: String,

    },

    Email: {
        type: String,
    },

    ContactNumber: {
        type: Number,
    },

    AppointmentFor: {
        type: String,
    },

    ArrivalDate: {
        type: Date,
    },

    ArrivalTime: {
        type: Time,
    }

})


const Product = mongoose.model("Appointment", AppointmentSchema);

module.exports = Product;