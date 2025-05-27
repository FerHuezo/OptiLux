import { Schema, model } from "mongoose";

const filterSchema = new Schema(
  {
    typeFilter: {
      type: String,
      required: [true, "El tipo de filtro es obligatorio."],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "El precio es obligatorio."],
      min: [0, "El precio no puede ser negativo."],
    },
    /*
    image : {
      type : String,
      required : [true, "La imagen es obligatoria"],
      trim : true
    }*/
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("filterLenses", filterSchema);
