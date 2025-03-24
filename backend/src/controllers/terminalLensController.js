const terminalLensController = {}

import terminalLensesModel from "../models/terminalLenses.js"


terminalLensController.getTerminal = async (req, res) => {

const terminal = await terminalLensesModel.find();

res.json(terminal)

};


terminalLensController.createTerminal = async (req, res) => {

const {typeTerminals, price} = req.body;

const terminalLens = new terminalLensesModel({typeTerminals, price});

await terminalLens.save();

res.json({message : "terminal created"});
};


terminalLensController.deleteTerminal = async (req, res) =>{

const terminalLensC = terminalLensesModel.findByIdAndDelete(req.params.id);

if(!terminalLensC){

res.status(404).json({message: "delete failed"});
};

res.json({message: "terminal deleted"});

};



terminalLensController.updateTerminal = async (req, res) => {

const {typeTerminals, price} = req.body;

await terminalLensesModel.findByIdAndUpdate(
req.params.id,
{
    typeTerminals, 
    price
},

{
    new: true
}

);

res.json({message: "terminal updated"})

};

export default terminalLensController;