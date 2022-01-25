const mongoose = require("mongoose");

const caisseSchema = mongoose.Schema(
  {
    id: String,
    montant: {
        type: Number,
        default: 0
    }
  },
  { collection: "caisse" }
);
const model = mongoose.model("caisseSchema", caisseSchema);

module.exports = model;
