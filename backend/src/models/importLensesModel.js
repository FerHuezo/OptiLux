import { Schema, model } from "mongoose";

const importLensSchema = new Schema(
  {
    color: {
      type: String,
      required: [true, "El color es obligatorio."],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "El precio es obligatorio."],
      min: [0, "El precio no puede ser negativo."],
    },
    
    increaseLenses: {
      type: String,
      min: 0,
      required: [true, "El aumento de lentes es obligatorio."],
    },

    amount: {
      type: Number,
      required: [true, "La cantidad es obligatoria."],
      min: [1, "Debe haber al menos 1 unidad."],
    },
    brand: {
      type: String,
      required: [true, "La marca es obligatoria."],
      trim: true,
    },
    /*
    img: {
      type: String,
      required : [true, "Imagen obligatoria."],
      trim : true,
    }*/
  },
  {
    collection: 'importLenses',
    timestamps: true,
    strict: true,
  }
);

export default model("importLenses", importLensSchema);