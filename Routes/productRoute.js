const { Router } = require("express");
const fs = require('fs')
const productController = require("../Controllers/productController.js");
const {
  requireAuth,
  checkUser,
  requireAdmin,
} = require("../midllewares/authMidlleware");
const router = Router();
const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      console.log('uploading...');
      console.log(path.join(__dirname, "/../../uploads/"))
      cb(null, path.join(__dirname, "/../../uploads/"))
      console.log('uploaded');
  },
  filename: function (req, file, cb) {
      let pat = v4() + "-" + file.originalname
      let arr = pat.split(' ') 
      console.log(arr);
      pat.replace(/\s+/g, '')
      console.log('pat: ', pat);
    cb(null, pat);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


const upload = multer({ storage });

router.post(
  "/api/uploadMainImage",
  requireAdmin,
  upload.single("productMainImage"),
  productController.uploadMainImage
);
router.post(
  "/api/uploadSecondImages",
  requireAdmin,
  upload.array("productSecondImages", 4),
  productController.uploadSecondImages
);
router.post("/api/addProduct", requireAdmin, productController.addProduct);
router.post(
  "/api/updateProduct/:id",
  requireAdmin,
  productController.updateProduct
);
router.get(
  "/api/deleteProduct/:id",
  requireAdmin,
  productController.deleteProduct
);
router.get("/api/getAllNoDuplProducts", productController.getAllNoDuplProducts);
router.get("/api/getAllProducts", productController.getAllProducts);
router.get(
  "/api/getAllProductsByCategory/:category",
  productController.getAllProductsByCategory
);
router.get("/api/searchForProducts", productController.searchForProducts);
router.post("/api/getfilteredProducts", productController.getfilteredProducts);
router.get("/api/getAllMarques", productController.getAllMarques);
router.get("/api/getallTailles", productController.getallTailles);
router.get("/api/getallPointure", productController.getallPointure);
router.get("/api/getallGenres", productController.getallGenres);
router.get("/api/getallCategories", productController.getallCategories);
router.get(
  "/api/getProductByTitle/:title",
  productController.getProductByTitle
);
router.get("/api/getProductByref/:ref", productController.getProductByref);
router.post(
  "/api/getProductByrefAndTaille",
  productController.getProductByrefAndTaille
);
router.post("/api/getColor", productController.getColor);
router.get(
  "/api/getProductsByclient/:cid",
  productController.getProductsByclient
);
router.get("/api/getProductByrefF/:ref", productController.getProductByrefF);
router.get("/api/getProductByid/:id", productController.getProductByid);
router.post("/api/return", productController.return);
router.post("/api/returne", productController.returne);
router.post("/api/returnD", productController.returnD);
router.post("/api/takeProduct", productController.takeProduct);

module.exports = router;
