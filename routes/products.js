const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../controllers/products");
const { validateProduct } = require("../middlewares/validate");

router.get("/", getProducts);
router.post("/", validateProduct, addProduct);

module.exports = router;
