import mongoose from "mongoose";
import Car from "../model/carModel.js";
import { cars } from "../../database/data/carData.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
	.connect(process.env.MONGO_URI_TEST, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("connected");
	})
	.catch((err) => {
		console.log(err);
	});

const seedDB = async () => {
	await Car.deleteMany({});
	await Car.insertMany(cars);
};

seedDB().then(() => {
	mongoose.connection.close();
});
