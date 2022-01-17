const { Router } = require("express");
const customerController = require("../Controllers/customerController.js");
const router = Router();

router.post("/api/addCustomer", customerController.addCustomer);
router.delete("/api/deleteCustomer/:ref", customerController.deleteCustomer);
router.post("/api/updateToPending/:ref", customerController.updateToPending);
router.post("/api/updateToDelivery/:ref", customerController.updateToDelivery);
router.post("/api/updateToProgress/:ref", customerController.updateToProgress);
router.post("/api/updateTo24/:ref", customerController.updateTo24);
router.get("/api/getPending", customerController.getPending);
router.get("/api/getCustomerByref/:ref", customerController.getCustomerByref);

module.exports = router;
