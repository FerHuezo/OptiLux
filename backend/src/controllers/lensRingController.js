const lensRingController = {}

import lensRingModel from "../models/lensRing.js"


lensRingController.getlensRing = async (req, res) => {

const lensRing = await lensRingModel.find();

res.json(lensRing);
     
};

lensRingController.createLensRing = async(req, res) => {

const {typeLens, price} = req.body;

const lensRing = new lensRingModel({typeLens, price})

await lensRing.save();

res.json({message : "se ha creado correctamente"})

};

lensRingController.deleteLensRing = async (req, res) => {

const lensRing = await lensRingModel.findByIdAndDelete(req.params.id)

if(!lensRing){

    return res.status(404).json({message: "error no se elimino"});
}

res.json({message: "se elimino correctamente"})

};


lensRingController.updateLensRing = async (req, res) => {
    
const {typeLens, price} = req.body;

await lensRingModel.findByIdAndUpdate(
req.params.id,
{
    typeLens, 
    price
},

{new: true}
);

res.json({message: "updated"});

};


export default lensRingController;
