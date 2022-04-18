"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 5000;
app.use((0, _cors["default"])());
app.use(_express["default"].json);
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});