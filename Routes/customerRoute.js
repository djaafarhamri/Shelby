const { Router } = require("express");
const customerController = require("../Controllers/customerController.js");
const router = Router();

router.post("/api/addCustomer", customerController.addCustomer);
router.delete("/api/deleteCustomer/:id", customerController.deleteCustomer);
router.post("/api/updateToPending/:id", customerController.updateToPending);
router.post("/api/updateToDelivery/:id", customerController.updateToDelivery);
router.post("/api/updateToProgress/:id", customerController.updateToProgress);
router.post("/api/updateTo24/:id", customerController.updateTo24);
router.get("/api/getPending", customerController.getPending);
router.get("/api/getCustomerByid/:id", customerController.getCustomerByid);

module.exports = router;
