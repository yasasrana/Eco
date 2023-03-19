const router = require("express").Router();
const salary = require("../model/salaryModel")
    // const Resignation = require("../model/resignationModel");
const { v4: uuidv4 } = require("uuid");

//router for add an salary
router.post("/salary", async(req, res) => {

    const empId = uuidv4();
    const empName = req.body.empName;
    const salary = req.body.salary;
    const gender = req.body.gender;
    const DOB = req.body.DOB;
    const email = req.body.email;
    const type = req.body.type;
    const nic = req.body.nic;
    const date = req.body.date;
    const status = req.body.status;
    const mobileNo = Number(req.body.mobileNo);

    const newsalary = new salary({
        empId,
        empName,
        salary,
        gender,
        DOB,
        email,
        type,
        nic,
        date,
        status,
        mobileNo,
    })

    try {
        salary.find({ nic: newsalary.nic }, async(err, doc) => {
            if (Object.keys(doc).length == 0) {
                try {
                    let response = await newsalary.save();
                    if (response)
                    //console.log(doc);
                        return res.status(201).send({ message: "New salary record Added" });
                } catch (err) {
                    //console.log("error while saving");
                    return res.status(500).send({ status: "Internal Server Error" });
                }
            } else {
                //console.log("nic found")
                return res.status(400).send({ status: "salary record are already exist!" });
            }
        });
    } catch (err) {
        console.log("error", err)
    }
});


//router for retrieve and send all the salary records
router.get("/salary", async(req, res) => {
    try {
        const response = await salary.find();
        return res.status(200).send({ status: "Success", data: response });
    } catch (error) {
        console.log("Something went wrong while connecting to DB");
        return { ok: false };
    }

});


//router for update an salary details
router.put("/salary/update/:empId", async(req, res) => {
    const empId = req.params.empId;

    const {
        empName,
        salary,
        gender,
        DOB,
        email,
        type,
        nic,
        date,
        status,
        mobileNo,
    } = req.body;

    const salaryPayload = {
        empName,
        salary,
        gender,
        DOB,
        email,
        type,
        nic,
        date,
        status,
        mobileNo,

    }

    if (empId) {
        try {
            const response = await salary.findOneAndUpdate({ empId: empId }, salaryPayload);
            if (response != null) {
                return res.status(200).send({ status: "salary record Successfully updated!" });
            }
            return res.status(400).send({ status: "Invalid salary record" })
        } catch (err) {
            return res.status(500).send({ status: "Internal server Error" });
        }
    }
});


//router for delete an salary details
router.post("/salary/delete/:empId", async(req, res) => {
    const empId = req.params.empId;

    if (empId) {
        try {
            const response = await salary.findOneAndDelete({ empId: empId });
            if (response != null) {
                return res.status(200).send({ status: "salary record Successfully Deleted!" });
            }
            return res.status(400).send({ status: "Invalid salary record" })
        } catch (err) {
            return res.status(500).send({ status: "Internal server Error" });
        }
    }
});

module.exports = router;