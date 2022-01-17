const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    codeBar: {
      type: Number,
      required: true,
    },
    ref: {
      type: Number,
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
    category: {
      type: String,
      required: true,
    },
    marque: {
      type: String,
      required: true,
    },
    subCategory: {
      type: String,
      required: true,
    },
    taille: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
    prixPay: {
      type: Number,
      default: 0,
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
