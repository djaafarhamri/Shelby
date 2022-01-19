const Customer = require("../models/Customer");
const Product = require("../models/Product");

module.exports.getCustomerByid = async (req, res) => {
  const id = req.params.id;
  try {
    const client = await Customer.findOne({ id });
    res.status(200).json(client);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.getPending = async (req, res) => {
  try {
    const client = await Customer.find({ status: 'pending' });
    res.status(200).json(client);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.getVendre = async (req, res) => {
  try {
    const clients = await Customer.find({ status: 'vendre' });
    const products = [];
    for (let client of clients) {
      let product = await Product.findOne({_id: client.id})
      products.push(product)
    }
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};
module.exports.get24 = async (req, res) => {
  try {
    const client = await Customer.find({ status: '24' });
    res.status(200).json(client);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};
module.exports.getProgress = async (req, res) => {
  try {
    const client = await Customer.find({ status: 'progerss' });
    res.status(200).json(client);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};
module.exports.getDelivery = async (req, res) => {
  try {
    const client = await Customer.find({ status: 'delivery' });
    res.status(200).json(client);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.addCustomer = async (req, res) => {
  const { id, username, phone, adress, ref, status } = req.body;
  try {
    await Customer.create({ id, username, phone, adress, ref, status });
    res.status(200).json("client created");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToProgress = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findOneAndUpdate({ id }, {$set: {status: 'progress'}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToPending = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findOneAndUpdate({ id }, {$set: {status: 'pending'}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToDelivery = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findOneAndUpdate({ id }, {$set: {status: 'delivery'}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateTo24 = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findOneAndUpdate({ _id: id }, {$set: {status: '24'}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findOneAndDelete({ id });
    res.status(200).json("deleted");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};
