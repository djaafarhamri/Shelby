const { Router } = require("express");
const caisseController = require("../Controllers/caisseController.js");
const router = Router();

router.get("/api/getLaCaisse", caisseController.getLaCaisse);
router.post("/api/addToLaCaisse", caisseController.addToLaCaisse);
router.post("/api/takeFromLaCaisse", caisseController.takeFromLaCaisse);

module.exports = router;
