import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "El nombre es obligatorio."],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "El apellido es obligatorio."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El correo electrónico es obligatorio."],
     /* unique: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, "Formato de correo electrónico no válido."],*/
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria."],
      minlength: [6, "La contraseña debe tener al menos 6 caracteres."],
    },

    isVerified: {
    type: Boolean,
    default: false
}
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("Clients", clientSchema);