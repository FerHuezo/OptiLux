const increaseLensesController = {};

import increaseLensesModel from "../models/increaseLenses.js";


increaseLensesController.getIncrease = async (req, res) => {

const increaseLens = await increaseLensesModel.find();

res.json(increaseLens)
};


increaseLensesController.createIncrease = async (req, res) => {

const {increaseLevel, price} = req.body
const increaseLens = new increaseLensesModel({increaseLevel, price})
await increaseLens.save();

res.json({message: "Increase Lens Created"})
};

increaseLensesController.deleteIncrease = async (req, res) =>{

const increaseLens = await increaseLensesModel.findByIdAndDelete(req.params.id);
 if(!increaseLens){
    return res.status(404).json({message: "increase no furula"});
 }

 res.json({message : "deleted"});

};

increaseLensesController.updateIncrease = async (req, res) => {

const {increaseLevel, price} = req.body

await increaseLensesModel.findByIdAndUpdate(
    req.params.id,
    {
        increaseLevel, 
        price,
    },

    {
        new: true
    }
);

res.json({message: "Increase Updated"})
};
  

export default increaseLensesController;

    