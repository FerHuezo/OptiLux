import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    idClient: {
      type: Schema.Types.ObjectId,
      ref: "Clients",
      required: [true, "El cliente es obligatorio."],
    },
    importLenses: [
      {
        idProduct: {
          type: Schema.Types.ObjectId,
          ref: "importLenses",
          required: [true, "El producto es obligatorio."],
        }
      }
    ],
    customLenses: [
      {
        idProduct: {
          type: Schema.Types.ObjectId,
          ref: "customLenses",
          required: [true, "El producto es obligatorio."],
        }
      }
    ],
    total: {
      type: Number,
      required: [true, "El total es obligatorio."],
      min: [0, "El total no puede ser negativo."],
    },
    status: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("Orders", orderSchema);
