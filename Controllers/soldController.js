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
    console.log(err);
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

module.exports.getProfitByDate = async (req, res) => {
  const { dateStart, dateEnd } = req.body
  const dates = new Date(dateStart)
  const datee = new Date(dateEnd)
  const ys = dates.getFullYear();
  const ms = dates.getMonth();
  const ds = dates.getDate();
  const ye = datee.getFullYear();
  const me = datee.getMonth();
  const de = datee.getDate();
  console.log(ys, ye);
  try {
    await Sold.aggregate([
      {
        $match: {
          dateSold: { $gte: new Date(ys, ms, ds), $lte: new Date(ye, me, de) },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$profit" },
        },
      },
    ])
      .then((solds) => {
        console.log('solds date: ', solds);
        res.status(200).json(solds && solds[0].total);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(400);
  }
};
