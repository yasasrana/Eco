const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require ("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;


//Product management - chami
const Product = require("./controller/AddProductController");
app.use("/api", Product);

//Appointment management - chami
const Appointment = require("./controller/AddAppointmentController");
app.use("/api", Appointment);