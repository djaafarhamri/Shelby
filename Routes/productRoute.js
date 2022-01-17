const { Router } = require("express");
const productController = require("../Controllers/productController.js");
const { requireAuth, checkUser, requireAdmin } = require('../midllewares/authMidlleware')
const router = Router();

router.post("/api/addProduct", productController.addProduct);
router.post("/api/updateProduct/:id", requireAdmin, productController.updateProduct);
router.delete("/api/deleteProduct/:id", requireAdmin, productController.deleteProduct);
router.get("/api/getAllProducts", productController.getAllProducts);
router.get("/api/getProductByCode/:codeBar", productController.getAllProductsByCode);
router.get("/api/getAllProductsByCategory/:category", productController.getAllProductsByCategory);
router.get("/api/getAllProductsBySubCategory/:subCategory", productController.getAllProductsBySubCategory);
router.get("/api/getProductByTitle/:title", productController.getProductByTitle);
router.get("/api/getProductByref/:ref", productController.getProductByref);
router.post("/api/return", productController.return);

module.exports = router;
