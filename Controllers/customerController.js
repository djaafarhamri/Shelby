const Customer = require("../models/Customer");
const Product = require("../models/Product");
ObjectId = require('mongodb').ObjectID;

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
    res.status(200).json({products, clients});
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};
module.exports.get24 = async (req, res) => {
  const response = []
  try {
    const clients = await Customer.find({ status: '24' });
    for (let client of clients){
      const product = await Product.findOne({_id: client.id});
      response.push({
        product_id: product._id,
        client_id: client._id,
        name: product.title,
        ref: product.ref,
        taille: product.taille,
        client: client.username,
        phone: client.phone,
        adress: client.adress,
        price: product.price
      })
    }
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};
module.exports.getProgress = async (req, res) => {
  const response = []
  try {
    const clients = await Customer.find({ status: 'progress' });
    for (let client of clients){
      const product = await Product.findOne({_id: client.id});
      response.push({
        product_id: product._id,
        client_id: client._id,
        name: product.title,
        ref: product.ref,
        taille: product.taille,
        client: client.username,
        phone: client.phone,
        adress: client.adress,
        price: product.price
      })
    }
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};
module.exports.getDelivery = async (req, res) => {
  const response = []
  try {
    const clients = await Customer.find({ status: 'delivery' });
    for (let client of clients){
      const product = await Product.findOne({_id: client.id});
      response.push({
        product_id: product._id,
        client_id: client._id,
        name: product.title,
        ref: product.ref,
        taille: product.taille,
        client: client.username,
        phone: client.phone,
        adress: client.adress,
        price: product.price
      })
    }
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.addCustomer = async (req, res) => {
  const { id, username, phone, adress, ref, status } = req.body;
  try {
    await Customer.create({ id: ObjectId(id), username, phone, adress, ref, status });
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
  const { _id, status, prixPay } = req.body;
  const client = await Customer.findById(_id)
  const product = await Product.findById(client.id)
  const prix_reste = product.price - prixPay
  try {
    await Customer.findOneAndUpdate({ _id }, {$set: {status, prix_reste}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToDelivery = async (req, res) => {
  const { _id, nom, adress, phone, status } = req.body;
  try {
    await Customer.findOneAndUpdate({ _id }, {$set: {status, username: nom, phone, adress}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateTo24 = async (req, res) => {
  const { _id, status } = req.body;
  try {
    const client = await Customer.findOneAndUpdate({ _id }, {$set: {status}});
    res.status(200).json(client);
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findOneAndDelete({ _id: id });
    res.status(200).json("deleted");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};
