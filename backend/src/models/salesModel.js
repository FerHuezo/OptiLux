import { Schema, model } from "mongoose";

const saleSchema = new Schema(
  {
    idOrder: {
      type: Schema.Types.ObjectId,
      ref: "Orders",
      required: [true, "La orden es obligatoria."],
    },
    address: {
      latitude: {
        type: Number,
        required: [true, "La latitud es obligatoria."],
        min: -90,
        max: 90,
      },
      longitude: {
        type: Number,
        required: [true, "La longitud es obligatoria."],
        min: -180,
        max: 180,
      },
    },
    paymentMethod: {
      type: String,
      enum: ["Tarjeta de crédito", "Efectivo", "PayPal"],
      required: [true, "El método de pago es obligatorio."],
    },
    status: {
      type: String,
      enum: ["pendiente", "pagado", "cancelado"],
      default: "pendiente",
    },
    amountPaid: {
      type: Number,
      required: [true, "El monto pagado es obligatorio."],
      min: [0, "El monto no puede ser negativo."],
    },
    transactionId: {
      type: String,
      required: function () {
        return this.paymentMethod !== "Efectivo";
      },
    },
  },
  {
    timestamps: true,
  }
);

export default model("Sales", saleSchema);