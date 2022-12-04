const express = require("express");
const controller = require("./category.controller");

const router = express.Router();

router.get("/", controller.findAll);

router.get("/:id", controller.findById);

router.post("/", controller.create);

module.exports = router;