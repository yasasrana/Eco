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

//finaciel management - boya
const Employee = require("./controller/salaryController");
app.use("/api", salary);




mongoose.connect(URL).then(() => {
        console.log('DB Connected Successfully');
    })
    .catch((err) => console.log('DB Connection Error', err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});