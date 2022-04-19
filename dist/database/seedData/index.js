"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.seedCars = void 0;

var _carData = require("../data/carData");

var _carModel = _interopRequireDefault(require("../model/carModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var seedCars = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var seededCars;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("CARS", _carData.cars);
            _context.prev = 1;
            _context.next = 4;
            return _carModel["default"].deleteMany({});

          case 4:
            _context.next = 6;
            return _carModel["default"].insertMany(_carData.cars);

          case 6:
            seededCars = _context.sent;
            console.log("CARS", seededCars);
            return _context.abrupt("return", res.json({
              seededCars: seededCars
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log("REWQ", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function seedCars(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // export const seedProducts = async (req, res) => {
// 	await Product.deleteMany({});
// 	const seedProducts = await Product.insertMany(products);
// 	return res.json({ seedProducts });
// };


exports.seedCars = seedCars;