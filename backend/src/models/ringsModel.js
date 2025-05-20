import { Schema, model } from "mongoose";

const lensRingSchema = new Schema(
  {
    typeLens: {
      type: String,
      required: [true, "El tipo de lente es obligatorio."],
    },
    price: {
      type: Number,
      required: [true, "El precio es obligatorio."],
      min: [0, "El precio no puede ser negativo."],
    },
    image : {
      type : String,
      required : [true, "La imagen es obligatoria"],
      trim : true
    }
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("lensRing", lensRingSchema);