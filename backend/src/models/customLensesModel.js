// customLensesModel.js
import { Schema, model } from "mongoose";

const customLensSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default model("customLenses", customLensSchema);
