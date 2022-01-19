const Product = require("../models/Product");
const Customer = require("../models/Customer");

module.exports.addProduct = async (req, res) => {
  const {
    ref,
    title,
    description,
    marque,
    genre,
    category,
    prixAch,
    price,
    taille,
    quantity,
  } = req.body;
  const refExist = await Product.find({ ref });
  if (refExist.length) {
    res.json("duplicate ref");
  } else {
    try {
      const product = await Product.create({
        ref,
        title,
        description,
        marque,
        genre,
        category,
        prixAch,
        price,
        taille,
        quantity,
      });
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
      res.status(400).json("error occured while adding the product");
    }
  }
};

module.exports.updateProduct = async (req, res) => {
  const {
    title,
    description,
    category,
    marque,
    subCategory,
    quantity,
    taille,
    price,
    dateAdded,
    dateSold,
    state,
  } = req.body;
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          description,
          category,
          marque,
          subCategory,
          quantity,
          taille,
          price,
          dateAdded,
          dateSold,
          state,
        },
      }
    );
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(400).json("error occured while updating the product");
  }
};

module.exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findOneAndDelete({ _id: id });
    res.status(200).json("product deleted");
  } catch (e) {
    console.log(e);
    res.status(400).json("error occured while deleting the product");
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getAllProductsByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getAllProductsBySubCategory = async (req, res) => {
  const subCategory = req.params.subCategory;
  try {
    const products = await Product.find({ subCategory });
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getProductByTitle = async (req, res) => {
  const title = req.params.title;
  try {
    const product = await Product.findOne({ title });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getAllPendingProducts = async (req, res) => {
  try {
    const product = await Product.find({ state: "pending" });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getAllOnDeliveryProducts = async (req, res) => {
  try {
    const product = await Product.find({ state: "on delivery" });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getAllInProgressProducts = async (req, res) => {
  try {
    const product = await Product.find({ state: "in progress" });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getProductByref = async (req, res) => {
  const ref = req.params.ref;
  try {
    const product = await Product.find({ ref });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getProductByid = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({ _id: id });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.return = async (req, res) => {
  const { product } = req.body;
  try {
    const product1 = await Product.findOne({
      _id: product._id,
    });
    if (product1) {
      await Product.findOneAndUpdate(
        { _id: product._id },
        { $set: { quantity: (product1.quantity + 1) } }
      );
    } 
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.returne = async (req, res) => {
  const { product } = req.body;
  try {
    const client = await Customer.find({ _id: product._id })
    const product1 = await Product.findOne({
      _id: client.id,
    });
    console.log(product1);
    if (product1) {
      await Product.findOneAndUpdate(
        { _id: client.id },
        { $set: { quantity: (product1.quantity + 1) } }
        );
      await Customer.findOneAndDelete({ _id: product._id })
    } 
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.takeProduct = async (req, res) => {
  const { _id } = req.body;
  try {
    const product = await Product.findOne({
      _id,
    });
    await Product.findOneAndUpdate(
      { _id },
      { $set: { quantity: product.quantity - 1 } }
    );
    res.json({ product });
  } catch (e) {
    console.log(e);
    res.status(404).json("error");
  }
};
