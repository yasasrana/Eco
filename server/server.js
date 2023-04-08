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


//Salary management - Boya
const Salary = require("./controller/SalaryController");
app.use("/api", Salary);



mongoose.connect(URL).then(()=> {
    console.log('DB Connected Successfully');
})
.catch((err) => console.log('DB Connection Error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});
