const express = require("express");
const router = express.Router();
const { getOrders, placeOrder } = require("../controllers/orders");

router.get("/", getOrders);
router.post("/", placeOrder);

module.exports = router;
