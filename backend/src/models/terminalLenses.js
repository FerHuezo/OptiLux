import { Schema, model } from "mongoose";

const terminalLensesSchema = new Schema({

    typeTerminals:{
            type: String,
            require: true,
    },

    price:{
        type: Number,
        require: true,
        
    },

},

{
    timestamps: true,
    strict:false,
},

);

export default model("terminalLenses", terminalLensesSchema);

