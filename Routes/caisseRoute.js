const { Router } = require("express");
const caisseController = require("../Controllers/caisseController.js");
const { requireAuth, requireAdmin } = require("../midllewares/authMidlleware.js");
const router = Router();

router.get("/api/getLaCaisse", requireAdmin, caisseController.getLaCaisse);
router.post("/api/addToLaCaisse", caisseController.addToLaCaisse);
router.post("/api/takeFromLaCaisse", requireAdmin, caisseController.takeFromLaCaisse);

module.exports = router;
