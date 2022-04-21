import { check } from "express-validator";
import { notEmpty } from "../helper/notEmpty.js";

export const createAdvertSchema = [
	check("photo").trim().exists().withMessage("photo is required"),
	check("brand")
		.trim()
		.exists()
		.withMessage("Brand is required")
		.custom((value) => notEmpty(value, "brand field cannot be left blank"))
		.isLength({ min: 2 })
		.withMessage("Brand should be be at least 2 characters"),
	check("model")
		.trim()
		.exists()
		.withMessage("model is required")
		.custom((value) => notEmpty(value, "Model field cannot be left blank"))
		.isLength({ min: 2 })
		.withMessage("Model should be be at least 2 characters"),
	check("description")
		.trim()
		.exists()
		.withMessage("Say something about the car")
		.custom((value) => notEmpty(value, "brand field cannot be left blank"))
		.isLength({ min: 2 })
		.withMessage("Brand should be be at least 2 characters"),
	check("price")
		.trim()
		.exists()
		.withMessage("Price is required")
		.custom((value) => notEmpty(value, "Price field cannot be left blank"))
		.isInt()
		.withMessage("Enter a valid amount"),
	check("sellerName")
		.trim()
		.exists()
		.withMessage("Seller is required")
		.custom((value) => notEmpty(value, "Sellers name cannot be left blank"))
		.isLength({ min: 2 })
		.withMessage("Seller should be be at least 2 characters")
		.customSanitizer((name) => name.toLowerCase()),
	check("phoneNumber")
		.trim()
		.exists()
		.withMessage("Phone number is required")
		.custom((value) => notEmpty(value, "Seller phone number field cannot be left blank"))
		.isInt()
		.withMessage("Enter a valid phone number"),
];
