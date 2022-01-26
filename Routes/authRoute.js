const { Router } = require("express");
const authController = require("../Controllers/authController.js");
const router = Router();

router.post("/api/login", authController.login);
router.get("/api/logout", authController.logout);

module.exports = router;
