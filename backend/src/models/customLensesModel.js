import mongoose, { Schema, model } from "mongoose";

const customLensSchema = new Schema({
  price: {
    type: Number,
    required: true,
  },
  increase: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"increaseLenses",
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
