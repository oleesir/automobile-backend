"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _seedData = require("../database/seedData");

var router = (0, _express.Router)();
router.post("/cars", _seedData.seedCars);
var _default = router;
exports["default"] = _default;