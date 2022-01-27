const { Router } = require("express");
const { requireAdmin, requireManager } = require("../midllewares/authMidlleware.js");
const customerController = require("../Controllers/customerController.js");
const router = Router();

router.post("/api/addCustomer", customerController.addCustomer);
router.delete("/api/deleteCustomer/:id", customerController.deleteCustomer);
router.post("/api/updateToPending", requireManager, customerController.updateToPending);
router.post("/api/updateToDelivery", requireManager, customerController.updateToDelivery);
router.post("/api/updateToProgress/:id", customerController.updateToProgress);
router.post("/api/updateTo24", requireManager, customerController.updateTo24);
router.get("/api/getPending", requireManager, customerController.getPending);
router.get("/api/getProgress", requireManager, customerController.getProgress);
router.get("/api/getDelivery", requireManager, customerController.getDelivery);
router.get("/api/get24", requireManager, customerController.get24);
router.get("/api/getVendre", requireManager, customerController.getVendre);
router.get("/api/getCustomerByid/:id", requireManager, customerController.getCustomerByid);


module.exports = router;
