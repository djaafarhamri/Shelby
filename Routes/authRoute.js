const { Router } = require("express");
const authController = require("../Controllers/authController.js");
const { requireAdmin } = require("../midllewares/authMidlleware.js");
const router = Router();

router.post("/api/login", authController.login);
router.get("/api/logout", authController.logout);
router.get("/api/checkuser", requireAdmin, authController.checkuser);

module.exports = router;
