const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;

//Rental management - Senal
const Rental = require("./controller/RentalController");
app.use("/api", Rental);

//Reservation management - Ravindu
const Reservation = require("./controller/reservationController");
app.use("/api", Reservation);
const signupCon = require('./controller/signupController');
app.use("/api", signupCon);

//Vehicle management - Kaveen
const Vehicle = require("./controller/VehicleController");
app.use("/api", Vehicle);

//finaciel management - boya
const Employee = require("./controller/salaryController");
app.use("/api", salary);

//Login management - Chamoth
const loginRouter = require("./controller/Login.js");
const salary = require('./FINACIEL/model/salaryModel');
app.use("/login", loginRouter);



mongoose.connect(URL).then(() => {
        console.log('DB Connected Successfully');
    })
    .catch((err) => console.log('DB Connection Error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});