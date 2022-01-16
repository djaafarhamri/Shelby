const Customer = require("../models/Customer");

module.exports.getCustomerByref = async (req, res) => {
  const ref = req.params.ref;
  try {
    const client = await Customer.findOne({ ref });
    res.status(200).json(client);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.getPending = async (req, res) => {
  try {
    const client = await Customer.find({ status: pending });
    res.status(200).json(client);
  } catch (e) {
    console.log(e);
    res.status(400).json("no client");
  }
};

module.exports.addCustomer = async (req, res) => {
  const { username, phone, adress, ref, status } = req.body;
  try {
    await Customer.create({ username, phone, adress, ref, status });
    res.status(200).json("client created");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToProgress = async (req, res) => {
  const { ref } = req.body;
  try {
    await Customer.findOneAndUpdate({ ref }, {$set: {status: 'progress'}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToPending = async (req, res) => {
  const { ref } = req.body;
  try {
    await Customer.findOneAndUpdate({ ref }, {$set: {status: 'pending'}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.updateToDelivery = async (req, res) => {
  const { ref } = req.body;
  try {
    await Customer.findOneAndUpdate({ ref }, {$set: {status: 'delivery'}});
    res.status(200).json("updated");
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};
