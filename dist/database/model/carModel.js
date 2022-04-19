"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var carSchema = new _mongoose.Schema({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    "enum": ["New", "Used"],
    "default": "New",
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sellerName: {
    type: String,
    required: true
  },
  sellerNumber: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var Car = (0, _mongoose.model)("Car", carSchema);
var _default = Car;
exports["default"] = _default;