import { Schema, model } from "mongoose";

const increaseLensesSchema = new Schema(
  {
    increaseLevel: {
      type: Number,
      required: [true, "El nivel de aumento es obligatorio."],
      min: [0, "El nivel de aumento no puede ser negativo."],
    },
    price: {
      type: Number,
      required: [true, "El precio es obligatorio."],
      min: [0, "El precio no puede ser negativo."],
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("increaseLenses", increaseLensesSchema);