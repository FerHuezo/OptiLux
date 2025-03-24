import {Schema, model} from "mongoose";

const increaseLensesSchema = new Schema({

	increaseLevel:{
		
		type: Number,
		require: true,
	}, 

	price:{
		type: Number,
		require: true,
	},

},

	{
		timestamps: true,
		strict: false,
	},
);

export default model("increaseLenses", increaseLensesSchema);


