const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

require("dotenv").config();
const app = express();


const PORT = process.env.PORT || 5000;
const URL = process.env.MONGOBD_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


mongoose.connect(URL,{
    //useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:false
})

const connction = mongoose.connection;
connction.once("open", () =>{
    console.log("Mongodb Connection success");
})
app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})


//import routes
const customer = require("./routes/customer.js");



//route middleware
app.use("/customer",customer)