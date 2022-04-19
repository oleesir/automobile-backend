import { Schema, model } from "mongoose";

const carSchema = new Schema(
	{
		photo: { type: String, required: true },
		name: { type: String, required: true },
		condition: { type: String, enum: ["New", "Used"], default: "New", required: true },
		model: { type: String, required: true },
		year: { type: Number, required: true },
		price: { type: Number, required: true },
		sellerName: { type: String, required: true },
		sellerNumber: { type: String, required: true },
	},
	{ timestamps: true },
);

const Car = model("Car", carSchema);

export default Car;
