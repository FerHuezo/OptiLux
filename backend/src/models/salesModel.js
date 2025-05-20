import { Schema, model } from "mongoose";

const saleSchema = new Schema(
  {
    idOrder: {
      type: Schema.Types.ObjectId,
      ref: "Orders",
      required: [true, "La orden es obligatoria."],
    },
    address: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true }
      },      
    paymentMethod: {
      type: String,
      enum: ["Tarjeta de crédito", "Efectivo", "PayPal"],
      required: true
    },
    status: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
  }
);

export default model("Sales", saleSchema);