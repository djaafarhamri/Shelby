const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    id: {
      type: Object,
      required: true,
    },
    client: {
      type: String,
      default: '0'
    },
    username: {
      type: String,
    },
    phone: {
      type: String,
      length: [10, "please enter a valid phone number"],
    },
    adress: {
      type: String,
    },
    commune: {
      type: String,
    },
    ville: {
      type: String,
    },
    livrason: {
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
