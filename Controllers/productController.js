const Product = require("../models/Product");
const Customer = require("../models/Customer");

module.exports.uploadMainImage = async (req, res) => {
  console.log(req.file.path);
  res.status(200).json(req.file.path);
};
module.exports.uploadSecondImages = async (req, res) => {
  console.log("req.files : ", req.files);
  if (req.files) {
    let path = "";
    req.files.forEach((file, index, arr) => {
      path = path + file.path + ",";
    });
    res.status(200).json(path);
  }
};
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
    main_image,
    second_images,
  } = req.body;
  const refExist = await Product.find({ ref });
  if (refExist.length) {
    res.json("duplicate ref");
  } else {
    try {
      console.log("tssst");
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
        main_image,
        second_images,
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

module.exports.getAllNoDuplProducts = async (req, res) => {
  try {
    const products = await Product.find();
    let product = products.filter(
      (v, i, a) => a.findIndex((t) => t.ref === v.ref) === i
    );
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
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
module.exports.getfilteredProducts = async (req, res) => {
  const { categories, genres, pointures, marques } = req.body;
  try {
    const products = await Product.find({
      category: { $in: categories },
      genre: { $in: genres },
      taille: { $in: pointures },
      marque: { $in: marques },
    });
    let product = products.filter(
      (v, i, a) => a.findIndex((t) => t.ref === v.ref) === i
    );
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.searchForProducts = async (req, res) => {
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), "gi");
    try {
      const products = await Product.find({ title: regex });
      let product = products.filter(
        (v, i, a) => a.findIndex((t) => t.ref === v.ref) === i
      );
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
      res.status(404).json("no products found");
    }
  } else {
    try {
      const products = await Product.find({});
      let product = products.filter(
        (v, i, a) => a.findIndex((t) => t.ref === v.ref) === i
      );
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
      res.status(404).json("no products found");
    }
  }
};
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

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

module.exports.getAllMarques = async (req, res) => {
  try {
    const products = await Product.find();
    let marques = [];
    for (let p of products) {
      let marque = p.marque.toUpperCase();
      if (marque in marques) {
        continue;
      } else {
        marques.push(marque);
      }
    }
    let product = marques.filter(
      (v, i, a) => a.findIndex((t) => t === v) === i
    );
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getallTailles = async (req, res) => {
  try {
    const products = await Product.find({ category: { $ne: "Shoes" } });
    let tailles = [];
    for (let p of products) {
      let taille = p.taille.toUpperCase();
      if (taille in tailles) {
        continue;
      } else {
        tailles.push(taille);
      }
    }
    let product = tailles.filter(
      (v, i, a) => a.findIndex((t) => t === v) === i
    );
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getallPointure = async (req, res) => {
  try {
    const products = await Product.find({ category: "Shoes" });
    let tailles = [];
    for (let p of products) {
      let taille = p.taille.toUpperCase();
      if (taille in tailles) {
        continue;
      } else {
        tailles.push(taille);
      }
    }
    let product = tailles.filter(
      (v, i, a) => a.findIndex((t) => t === v) === i
    );
    res.status(200).json(product);
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

module.exports.getProductByrefAndTaille = async (req, res) => {
  const { ref, taille } = req.body;
  try {
    const product = await Product.findOne({ ref, taille });
    res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(404).json("no products found");
  }
};

module.exports.getProductByrefF = async (req, res) => {
  const ref = req.params.ref;
  try {
    console.log("trying");
    const products = await Product.find({ ref });
    let tailles = [];
    for (let p of products) {
      tailles.push({ t: p.taille, q: p.quantity });
    }
    let product = products.filter(
      (v, i, a) => a.findIndex((t) => t.ref === v.ref) === i
    );
    res.status(200).json({ product, tailles });
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
        { $set: { quantity: product1.quantity + 1 } }
      );
    }
  } catch (e) {
    console.log(e);
    res.status(400).json("error");
  }
};

module.exports.returne = async (req, res) => {
  const { product } = req.body;
  console.log("product : ", product);
  try {
    const client = await Customer.findOne({ _id: product.client_id });
    const product1 = await Product.findById(client.id);
    await Product.findOneAndUpdate(
      { _id: client.id },
      { $set: { quantity: product1.quantity + 1 } }
    );
    await Customer.findOneAndDelete({ _id: product.client_id });
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
