const Sold = require("../models/Sold");
const Customer = require("../models/Customer");
const Product = require("../models/Product");
ObjectId = require("mongodb").ObjectId;

module.exports.addSold = async (req, res) => {
  const { customer_id } = req.body;
  const client = await Customer.findOne({ _id: customer_id });
  const product = await Product.findOne({ _id: client.id });
  let profit = product.price - product.prixAch; 
  console.log({
    prodect_id: ObjectId(client.id),
    customer_id,
    price: product.price,
    profit,
    ref: client.ref,
  });
  try {
    await Sold.create({
      prodect_id: ObjectId(client.id),
      customer_id,
      price: product.price,
      profit,
      ref: client.ref,
    });
    res.status(200).json("sold");
  } catch (err) {
      console.log(err)
    res.status(400).json("not sold");
  }
};

module.exports.deleteSold = async (req, res) => {
  const _id = req.params._id;
  try {
    await Sold.findOneAndDelete({ customer_id: _id });
    res.status(200).json("sold deleted");
  } catch (err) {
    res.status(400);
  }
};

module.exports.getAllSold = async (req, res) => {
  try {
    const solds = await Sold.find();
    res.status(200).json(solds);
  } catch (err) {
    res.status(400);
  }
};
