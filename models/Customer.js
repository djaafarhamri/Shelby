const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    id: {
      type: Object,
      required: true,
      unique: true,
    },
    username: {
      type: String,
    },
    phone: {
      type: Number,
      length: [10, "please enter a valid phone number"],
    },
    adress: {
      type: String,
    },
    ref: {
      type: String,
      required: [true, "product required"],
    },
    prix_reste: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { collection: "customers"  }
);
const model = mongoose.model("CustomerSchema", customerSchema);

module.exports = model;
