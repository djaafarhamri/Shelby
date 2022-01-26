const { Router } = require("express");
const soldController = require("../Controllers/soldController.js");
const { requireManager, requireAdmin } = require( "../midllewares/authMidlleware.js");
const router = Router();

router.post("/api/addSold", requireManager, soldController.addSold);
router.delete("/api/deleteSold/:_id", requireManager, soldController.deleteSold);
router.get("/api/getAllSold", requireAdmin, soldController.getAllSold);
router.post("/api/getProfitByDate", requireAdmin, soldController.getProfitByDate);
router.get("/api/getTodaysSolds", requireAdmin, soldController.getTodaysSolds);

module.exports = router;
