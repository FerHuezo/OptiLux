import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
    type: String,
    required: true,
    },

    password: {
    type: String,
    required: true,
    },

    email: {
    type: String,
    required: true,
    },

    telephone: {
    type: String,
    required: true,
    },
    address: {
    type: String,
    required: true,
    },

    dui: {
    type: String,
    require: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    issnumber: {
      type: String,
      require: true,
    },
},
{
    timestamps: true,
    strict: false,
}
);

export default model("employees", employeeSchema);