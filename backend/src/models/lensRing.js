import {Schema, model} from "mongoose";



const lensRingSchema = new Schema({

	typeLens:{
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
		strict: false,
	},
);

export default model("lensRing", lensRingSchema)