const { Router } = require("express");
const customerController = require("../Controllers/customerController.js");
const router = Router();

router.post("/api/addCustomer", customerController.addCustomer);
router.delete("/api/deleteCustomer/:id", customerController.deleteCustomer);
router.post("/api/updateToPending/:id", customerController.updateToPending);
router.post("/api/updateToDelivery", customerController.updateToDelivery);
router.post("/api/updateToProgress/:id", customerController.updateToProgress);
router.post("/api/updateTo24", customerController.updateTo24);
router.get("/api/getPending", customerController.getPending);
router.get("/api/getProgress", customerController.getProgress);
router.get("/api/getDelivery", customerController.getDelivery);
router.get("/api/get24", customerController.get24);
router.get("/api/getVendre", customerController.getVendre);
router.get("/api/getCustomerByid/:id", customerController.getCustomerByid);

module.exports = router;
