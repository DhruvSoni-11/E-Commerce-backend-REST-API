const express = require("express");
const router = express.Router();
const { getUsers, addUser } = require("../controllers/users");
const { validateUser } = require("../middlewares/validate");

router.get("/", getUsers);
router.post("/", validateUser, addUser);

module.exports = router;
