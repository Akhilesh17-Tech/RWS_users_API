const express = require("express");

const router = express.Router();

//routes

//using users routes
router.use("/users", require("./users"));


module.exports = router;
