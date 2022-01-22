const Sold = require("../models/Sold");
const Customer = require("../models/Customer");
const Product = require("../models/Product");
ObjectId = require("mongodb").ObjectId;

module.exports.addSold = async (req, res) => {
  const { customer_id } = req.body;
  const client = await Customer.findOne({ _id: customer_id });
  const product = await Product.findOne({ _id: client.id });
  let profit = product.price - product.prixAch;
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

module.exports.getTodaysSolds = async (req, res) => {
  var response = []
  const today = new Date();
  const td = today.getDate()-1;
  const tm = today.getMonth();
  const ty = today.getFullYear();
  try {
    const solds = await Sold.find({
      dateSold: { $gte: new Date(Date.now() - (3600*1000*24)), $lte: new Date(Date.now()) },
    });
    for(let sold of solds) {
      var product = await Product.findOne({_id: sold.prodect_id})
      response.push({
        name: product.title,
        ref: product.ref,
        taille: product.taille,
        price: sold.price,
        profit: sold.profit,
      })
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(400);
  }
};

module.exports.getProfitByDate = async (req, res) => {
  const { dateStart, dateEnd } = req.body
  const dates = new Date(dateStart)
  const datee = new Date(dateEnd)
  try {
    await Sold.aggregate([
      {
        $match: {
          dateSold: { $gte: new Date(dates), $lte: new Date(datee) },
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
        res.status(200).json(solds.length && solds[0].total);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(400);
  }
};
