const { Router } = require("express");
const productController = require("../Controllers/productController.js");
const { requireAuth, checkUser, requireAdmin } = require('../midllewares/authMidlleware')
const router = Router();
const multer = require('multer')
const { v4 } = require('uuid')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, v4() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({ storage })

router.post("/api/uploadMainImage", upload.single('productMainImage'), productController.uploadMainImage);
router.post("/api/uploadSecondImages", upload.array('productSecondImages', 3), productController.uploadSecondImages);
router.post("/api/addProduct", productController.addProduct);
router.post("/api/updateProduct/:id", requireAdmin, productController.updateProduct);
router.delete("/api/deleteProduct/:id", requireAdmin, productController.deleteProduct);
router.get("/api/getAllNoDuplProducts", productController.getAllNoDuplProducts);
router.get("/api/getAllProductsByCategory/:category", productController.getAllProductsByCategory);
router.get("/api/getAllProductsBySubCategory/:subCategory", productController.getAllProductsBySubCategory);
router.get("/api/getProductByTitle/:title", productController.getProductByTitle);
router.get("/api/getProductByref/:ref", productController.getProductByref);
router.get("/api/getProductByrefF/:ref", productController.getProductByrefF);
router.get("/api/getProductByid/:id", productController.getProductByid);
router.post("/api/return", productController.return);
router.post("/api/returne", productController.returne);
router.post("/api/takeProduct", productController.takeProduct);

module.exports = router;
