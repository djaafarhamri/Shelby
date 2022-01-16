const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    codeBar: {
      type: Number,
      required: true,
      uniique: true
    },
    ref: {
      type: Number,
      required: true,
      uniique: true
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
    quantity: {
        type: Number,
        default: 1
    },
    taille: {
        type: String,
        required: true
    },
    price: {
      type: Number,
      required: true,
    },
    dateAdded: {
      type: Date,
      default: Date.now
    },
    dateSold: {
      type: Date,
    },
    state: {
      type: String,
      default: "avaible"
    }
  },
  { collection: "products" }
);

const model = mongoose.model("ProductSchema", productSchema);

module.exports = model;
