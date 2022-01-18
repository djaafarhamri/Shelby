const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    ref: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    marque: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    prixAch: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    prixPay: {
      type: Number,
      default: 0,
    },
    taille: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
    dateSold: {
      type: Date,
    },
    state: {
      type: String,
      default: "avaible",
    },
  },
  { collection: "products" }
);

const model = mongoose.model("ProductSchema", productSchema);

module.exports = model;
