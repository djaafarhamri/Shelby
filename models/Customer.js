const mongoose = require("mongoose");
const Product = require('../models/Product')

const customerSchema = mongoose.Schema(
  {
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
      default: 0
    },
    taille: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
  },
  { collection: "customers" }
);

const model = mongoose.model("CustomerSchema", customerSchema);

module.exports = model;
