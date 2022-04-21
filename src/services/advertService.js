import Car from "../database/model/carModel";
import { createAdvert, findAdvert, deleteAdvert, viewAllAdvert } from "./modelService";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

export const postAdvertService = async (obj) => {
	try {
		const data = await createAdvert(Car, { ...obj });
		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const getAdvertService = async (id) => {
	try {
		const data = await findAdvert(Car, id);
		if (!data) {
			throw new Error("This car does not exists");
		}
		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteAdvertService = async (id) => {
	try {
		await deleteAdvert(Car, id);
	} catch (error) {
		throw error;
	}
};

export const getAllAdvertService = async () => {
	try {
		const data = await viewAllAdvert(Car);
		if (!data) {
			throw new Error("Cars are not available");
		}
		return data;
	} catch (error) {
		throw error;
	}
};
