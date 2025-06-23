import mongoose, { Schema, model } from "mongoose";

const customLensSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  color:{
    type: String,
    required: true,
  },
  increase: {
    type: Number,
    required: true,
  },
  filter: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"filterLenses",
    required: true,
  },
  ring: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"lensRing",
    required: true,
  },
  terminals: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"terminalLenses",
    required: true,
  },
});

export default model("customLenses", customLensSchema);
