const mongoose = require("mongoose");

const soldSchema = mongoose.Schema(
  {
    prodect_id: {
      type: Object,
      required: true,
    },
    customer_id: {
      type: Object,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "product required"],
    },
    profit: {
      type: Number,
      required: [true, "product required"],
    },
    ref: {
      type: String,
      required: [true, "product required"],
    },
    dateSold: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "solds" }
);
const model = mongoose.model("soldSchema", soldSchema);

module.exports = model;
