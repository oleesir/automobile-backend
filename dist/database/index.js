"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
// export const database = async () => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		await mongoose.connect(process.env.MONGO_URI, connectionParams);
// 		console.log("Database connected successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Database connection failed");
// 	}
// };
var _default = function _default(db) {
  var connect = function connect() {
    _mongoose["default"].connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(function () {
      return console.log("Successfully connected to db");
    })["catch"](function (error) {
      console.log("Error connecting to database: ", error);
      return process.exit(1);
    });
  };

  connect();
};

exports["default"] = _default;