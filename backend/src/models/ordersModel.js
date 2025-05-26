import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    idClient: {
      type: Schema.Types.ObjectId,
      ref: "Clients",
      required: [true, "El cliente es obligatorio."],
    },
    products: [
      {
        idProduct: {
          type: Schema.Types.ObjectId,
          required: true,
          refPath: "products.productType", // Dinámico según el tipo
        },
        productType: {
          type: String,
          required: true,
          enum: ["importLenses", "customLenses"],
        },
        quantity: {
          type: Number,
          default: 1,
          min: [1, "La cantidad mínima es 1."],
        },
      },
    ],
    total: {
      type: Number,
      required: [true, "El total es obligatorio."],
      min: [0, "El total no puede ser negativo."],
    },
    status: {
      type: String,
      enum: ["pendiente", "en_proceso", "completado", "cancelado"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("Orders", orderSchema);