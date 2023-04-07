const router = require("express").Router();
const Product = require("../model/AddProductModel");
const { v4: uuidv4 } = require("uuid");
// const moment = require('moment');
// const res = require("express/lib/response");


//add product details

router.post("/addproduct",async (req, res) => {

    const VId = uuidv4();
    const ProductBrand = req.body.ProductBrand;
    const ProductModel = req.body.ProductModel;
    const ProductType = req.body.ProductType;
    const FuelType = req.body.FuelType;
    const Transmission = req.body.Transmission;
    const Features = req.body.Features;

  

const newProduct = new Product({

        PId,
        ProductBrand,
        ProductModel,
        ProductType,
        FuelType,
        Transmission,
        Features,

      
})

//implementing method for adding product data
try {
    Product.find({ nic: newProduct.nic }, async (err, doc) => {
        if (Object.keys(doc).length == 0) {

            try {
                let response = await newProduct.save();
                if (response)
                    //console.log(doc);
                    return res.status(201).send({ message: "new Product Added" });
            } catch (err) {
                // console.log("error while saving", err);
                return res.status(500).send({ status: "Internal Server Error" });
            }
        }
        else {
            return res.status(400).send({ status: "Vehicle already exist!" });
        }
    });
} catch (err) {
    // console.log("error", err)
}
});

//view data product

router.get("/viewProduct",async (req,res) => {
    // console.log("request", req);

    try{
        const response = await Product.find();
        return res.status(200).send({
            status:"Success",
            data: response
        });
    }catch(error){
        console.log("Something went wrong while DB connection");
        return { ok: false};
    }
});

//router for update Product details

router.put("/updateVehicle/:VId",async (req,res) =>{
    const VId = req.params.VId;
    // console.log("***",VId)
    const{

        ProductBrand,
        ProductModel,
        ProductType,
        FuelType,
        Transmission,
        Features,

 
    } = req.body;

    const Payload = {
    
        ProductBrand,
        ProductModel,
        ProductType,
        FuelType,
        Transmission,
        Features,

 
    }
    

    if(PId) {
        try{
            const response = await Vehicle.findOneAndUpdate({PId: PId }, Payload);
            console.log("res>>", response)
            if (response != null){
                return res.status(200).send({status:"Product Successfully updated!"});
            }
            return res.status(400).send({status:"Invalid Product"})
        }
        catch(err){
            return res.status(500).send({status:"Internal server Error"});
        }
    }
});

//router for delete product

router.delete("/deleteProduct/:VId", async (req, res) => {
    const productId = req.params.VId;
    console.log("res>>",req.params.productId);

    if (productId) {
        try{
            const response = await Vehicle.findOneAndDelete({ PId: productId });
            console.log("res>>", response)
            if (response != null){
                return res.status(200).send({status:"Vehicle Successfully Deleted!"});
            }
            return res.status(400).send({status:"Invalid Vehicle"})
        }
        catch(err){
            return res.status(500).send({status:"Internal server Error"});
        }
    }

});
module.exports = router;