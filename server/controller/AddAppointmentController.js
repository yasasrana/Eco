const router = require("express").Router();
const Product = require("../model/AddAppointmentModel");
const { v4: uuidv4 } = require("uuid");
// const moment = require('moment');
// const res = require("express/lib/response");


//add appointment details

router.post("/addappointment",async (req, res) => {

    const AId = uuidv4();
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const ContactNumber = req.body.ContactNumber;
    const AppointmentFor = req.body.AppointmentFor;
    const ArrivalDate = req.body.ArrivalDate;
    const ArrivalTime = req.body.ArrivalTime;

  

const newAppointment = new Appointment({

        AId,
        FirstName,
        LastName,
        Email,
        ContactNumber,
        AppointmentFor,
        ArrivalDate,
        ArrivalTime,

      
})

//implementing method for confirm appointment
try {
    Appointment.find({ nic: newAppointment.nic }, async (err, doc) => {
        if (Object.keys(doc).length == 0) {

            try {
                let response = await newAppointment.save();
                if (response)
                    //console.log(doc);
                    return res.status(201).send({ message: "Appointment Confirmed" });
            } catch (err) {
                // console.log("error while saving", err);
                return res.status(500).send({ status: "Internal Server Error" });
            }
        }
        else {
            return res.status(400).send({ status: "Appointment already exist!" });
        }
    });
} catch (err) {
    // console.log("error", err)
}
});

//view appointment

router.get("/viewAppointment",async (req,res) => {
    // console.log("request", req);

    try{
        const response = await Appointment.find();
        return res.status(200).send({
            status:"Success",
            data: response
        });
    }catch(error){
        console.log("Something went wrong while DB connection");
        return { ok: false};
    }
});

module.exports = router;