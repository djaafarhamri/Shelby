const Customer = require("../models/Customer");
const Product = require("../models/Product");
ObjectId = require("mongodb").ObjectID;

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

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
    if (req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), "gi");
      const client = await Customer.find({ ref: regex,status: "pending" });
      res.status(200).json(client);
    } else {
      const client = await Customer.find({ status: "pending" });
      res.status(200).json(client);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.getVendre = async (req, res) => {
  try {
    const clients = await Customer.find({ status: "vendre" });
    const products = [];
    for (let client of clients) {
      let product = await Product.findOne({ _id: client.id });
      products.push(product);
    }
    res.status(200).json({ products, clients });
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};
module.exports.get24 = async (req, res) => {
  const response = [];
  try {
    if (req.query.search) {
      const regex = new RegExp(escapeRegex(req.query.search), "gi");
      const clients = await Customer.find({ ref: regex, status: "24" });
      for (let client of clients) {
        const product = await Product.findOne({ _id: client.id });
        if (product) {
          response.push({
            product_id: product._id,
            client_id: client._id,
            name: product.title,
            ref: product.ref,
            taille: product.taille,
            color: product.color,
            client: client.username,
            phone: client.phone,
            adress: client.adress,
            price: product.price,
          });
        }
      }
      res.status(200).json(response);
    } else {
      const clients = await Customer.find({ status: "24" });
      for (let client of clients) {
        const product = await Product.findOne({ _id: client.id });
        if (product) {
          response.push({
            product_id: product._id,
            client_id: client._id,
            name: product.title,
            ref: product.ref,
            taille: product.taille,
            color: product.color,
            client: client.username,
            phone: client.phone,
            adress: client.adress,
            price: product.price,
          });
        }
      }
      res.status(200).json(response);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};
module.exports.getProgress = async (req, res) => {
  const response = [];
  try {
    const clients = await Customer.find({ status: "progress" });
    for (let client of clients) {
      const product = await Product.findOne({ _id: client.id });
      response.push({
        product_id: product._id,
        client_id: client._id,
        cid: client.client,
        name: product.title,
        ref: product.ref,
        taille: product.taille,
        color: product.color,
        client: client.username,
        phone: client.phone,
        adress: client.adress,
        livraison: client.livrason,
        price: product.price,
      });
    }
    let data = response.filter(
      (v, i, a) => a.findIndex((t) => t.cid === v.cid) === i
    );
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.getDelivery = async (req, res) => {
  const response = [];
  console.log(req.query);
  try {
    if (req.query.search !== "null") {
      const regex = new RegExp(escapeRegex(req.query.search), "gi");
      const clients = await Customer.find({ ref: regex, status: "delivery" });
      for (let client of clients) {
        const product = await Product.findOne({ _id: client.id });
        response.push({
          product_id: product._id,
          client_id: client._id,
          name: product.title,
          ref: product.ref,
          taille: product.taille,
          color: product.color,
          client: client.username,
          phone: client.phone,
          adress: client.adress,
          price: product.price,
        });
      }
      res.status(200).json(response);
    } else {
      const clients = await Customer.find({ status: "delivery" });
      for (let client of clients) {
        const product = await Product.findOne({ _id: client.id });
        response.push({
          product_id: product._id,
          client_id: client._id,
          name: product.title,
          ref: product.ref,
          taille: product.taille,
          color: product.color,
          client: client.username,
          phone: client.phone,
          adress: client.adress,
          price: product.price,
        });
      }
      res.status(200).json(response);
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.addCustomer = async (req, res) => {
  const { id, client, username, phone, adress, livrason, ref, status } =
    req.body;
  const product = Product.find({ _id: id });
  try {
    if (product.quantity !== 0) {
      await Customer.create({
        id,
        client,
        username,
        phone,
        adress,
        livrason,
        ref,
        status,
      });
      res.status(200).json("client created");
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToProgress = async (req, res) => {
  const id = req.params.id;
  try {
    await Customer.findOneAndUpdate({ id }, { $set: { status: "progress" } });
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToPending = async (req, res) => {
  const { _id, status, prixPay } = req.body;
  const client = await Customer.findById(_id);
  const product = await Product.findById(client.id);
  const prix_reste = product.price - prixPay;
  try {
    await Customer.findOneAndUpdate({ _id }, { $set: { status, prix_reste } });
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToDelivery = async (req, res) => {
  const { _id, client, nom, adress, phone, status } = req.body;
  try {
    await Customer.findOneAndUpdate(
      { _id },
      { $set: { status, client, username: nom, phone, adress } }
    );
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateTo24 = async (req, res) => {
  const { _id, status } = req.body;
  try {
    const client = await Customer.findOneAndUpdate(
      { _id },
      { $set: { status } }
    );
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
