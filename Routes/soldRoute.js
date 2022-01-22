const { Router } = require("express");
const soldController = require("../Controllers/soldController.js");
const router = Router();

router.post("/api/addSold", soldController.addSold);
router.delete("/api/deleteSold/:_id", soldController.deleteSold);
router.get("/api/getAllSold", soldController.getAllSold);
router.post("/api/getProfitByDate", soldController.getProfitByDate);
router.get("/api/getTodaysSolds", soldController.getTodaysSolds);

module.exports = router;
