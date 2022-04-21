import Car from "../database/model/carModel";
import { createAdvert, findAdvert, deleteAdvert, viewAllAdvert } from "./modelService";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

export const postAdvertService = async (obj, files) => {
	try {
		const { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } = process.env;

		cloudinary.v2.config({
			cloud_name: CLOUDINARY_CLOUD_NAME,
			api_key: CLOUDINARY_API_KEY,
			api_secret: CLOUDINARY_API_SECRET,
			secure: true,
		});

		let imageFile = files;

		if (!imageFile) {
			throw new Error("No photo found");
		}

		const response = await cloudinary.v2.uploader.upload(imageFile.path);

		const data = await createAdvert(Car, { ...obj, photo: response.secure_url });
		return data;
	} catch (error) {
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
