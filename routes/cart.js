const express = require("express");
const router = express.Router();
const { getCart, addToCart } = require("../controllers/cart");

router.get("/", getCart);
router.post("/", addToCart);

module.exports = router;
