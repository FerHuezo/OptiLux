import { Schema, model } from "mongoose";

const branchSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre de la tienda es obligatorio."],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "La dirección es obligatoria."],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "El número de teléfono es obligatorio."],
      match: [/^\d{4}-\d{4}$/, "El formato del teléfono debe ser ####-####"],
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("Branches", branchSchema);