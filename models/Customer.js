const mongoose = require("mongoose");
const Product = require("./Product");

const customerSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter an username"],
      unique: [true, "username already exist"]
    },
    phone: {
        type: Number,
        required: [true, "please enter your phone number"],
        length: [10, "please enter a valid phone number"],
    },
    adress: {
      type: String,
      required: [true, "please enter your address"],      
    },
    panier: {
        type: [Product]
    }
  },
  { collection: "customers" }
);

const model = mongoose.model("CustomerSchema", customerSchema);

module.exports = model;

