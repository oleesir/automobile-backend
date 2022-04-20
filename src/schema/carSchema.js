import { check } from "express-validator";
import { notEmpty } from "../helper/notEmpty.js";

export const createAdvertSchema = [
	check("photo").trim().exists().withMessage("photo is required"),
	check("name")
		.trim()
		.exists()
		.withMessage("name is required")
		.custom((value) => notEmpty(value, "Name field cannot be left blank"))
		.isLength({ min: 2 })
		.withMessage("Name should be be at least 2 characters"),
	check("condition").optional().isIn(["New", "Used"]).withMessage("condtion can either be New or Used"),
	check("model")
		.trim()
		.exists()
		.withMessage("model is required")
		.custom((value) => notEmpty(value, "Model field cannot be left blank"))
		.isLength({ min: 2 })
		.withMessage("Model should be be at least 2 characters"),
	check("year")
		.trim()
		.exists()
		.withMessage("Year is required")
		.custom((value) => notEmpty(value, "Year field cannot be left blank"))
		.isInt()
		.withMessage("Enter a valid year")
		.isLength({ min: 4 })
		.withMessage("Enter a valid year"),
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
		.isAlpha()
		.withMessage("name should contain only alphabets")
		.customSanitizer((name) => name.toLowerCase()),
	check("sellerNumber")
		.trim()
		.exists()
		.withMessage("Phone number is required")
		.custom((value) => notEmpty(value, "Seller phone number field cannot be left blank"))
		.isInt()
		.withMessage("Enter a valid phone number"),
];
