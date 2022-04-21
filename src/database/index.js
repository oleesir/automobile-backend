import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const database = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Database connected successfully");
	} catch (error) {
		console.log("Database connection failed");
	}
};
