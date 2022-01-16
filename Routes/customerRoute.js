const { Router } = require("express");
const customerController = require("../Controllers/customerController.js");
const router = Router();

router.post("/api/addCustomer", customerController.addCustomer);
router.post("/api/updateToPending", customerController.updateToPending);
router.post("/api/updateToDelivery", customerController.updateToDelivery);
router.post("/api/updateToProgress", customerController.updateToProgress);
router.get("/api/getPending", customerController.getPending);
router.get("/api/getCustomerByref/:ref", customerController.getCustomerByref);

module.exports = router;
