import { Schema, model } from "mongoose";

const terminalLensesSchema = new Schema(
  {
    typeTerminals: {
      type: String,
      required: [true, "El tipo de terminal es obligatorio."],
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

export default model("terminalLenses", terminalLensesSchema);