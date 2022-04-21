import { Schema, model } from "mongoose";

const carSchema = new Schema(
	{
		photo: { type: String, required: true },
		brand: { type: String, required: true },
		model: { type: String, required: true },
		price: { type: Number, required: true },
		sellerName: { type: String, required: true },
		sellerNumber: { type: String, required: true },
	},
	{ timestamps: true },
);

const Car = model("Car", carSchema);

export default Car;
