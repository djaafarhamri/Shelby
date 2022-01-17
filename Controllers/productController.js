const Product = require("../models/Product");

module.exports.addProduct = async (req, res) => {
  const {
    codeBar,
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
  try {
    const product = await Product.create({
      codeBar,
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
    });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(400).json("error occured while adding the product");
  }
};

module.exports.updateProduct = async (req, res) => {
  const {
    codeBar,
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
          codeBar,
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

module.exports.getAllProductsByCode = async (req, res) => {
  const codeBar = req.params.codeBar;
  try {
    const product = await Product.findOne({ codeBar });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getAllPendingProducts = async (req, res) => {
  try {
    const product = await Product.find({ state: 'pending' });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getAllOnDeliveryProducts = async (req, res) => {
  try {
    const product = await Product.find({ state: 'on delivery' });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getAllInProgressProducts = async (req, res) => {
  try {
    const product = await Product.find({ state: 'in progress' });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getProductByref = async (req, res) => {
  const ref = req.params.ref
  try {
    const product = await Product.findOne({ ref });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.return = async (req, res) => {
  const { ref, taille } = req.body
  try {
    const product1 = await Product.findOne({ ref });
    if (product1) {
      if (taille in product1.taille) {
        for (let product in product1.taille) {
          if (product === taille) {
            product.quantity += 1
          }
        }
      }
      else {
        await Product.findOneAndUpdate({ ref }, {$push: {taille}})
      }
    }
  } catch (e) {
    console.log(e);
    res.status(404).json("error");
  }
};

module.exports.takeProduct = async (req, res) => {
  const { code, taille } = req.body
  try {
    const product1 = await Product.findOne({ codeBar: code });
    if (product1) {
      if (taille in product1.taille) {
        for (let product in product1.taille) {
          if (product === taille && product.quantity !== 0) {
            product.quantity -= 1
            res.json({product1})
          }
        }
      }
      else {
        res.json('taille non exist')
      }
    }
  } catch (e) {
    console.log(e);
    res.status(404).json("error");
  }
};
