import { cars } from "../data/carData";
import Car from "../model/carModel.js";

export const seedCars = async (req, res) => {
	try {
		await Car.deleteMany({});
		const seededCars = await Car.insertMany(cars);
		return res.json({ seededCars });
	} catch (error) {
		console.log("REWQ", error);
	}
};
