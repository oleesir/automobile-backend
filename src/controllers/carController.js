import { postAdvertService } from "../services/carService";

export const createAdvert = async (req, res) => {
	try {
		const newAdvert = await postAdvertService(req.body, req.file);
		res.status(201).json({ status: "success", newAdvert });
	} catch (err) {
		res.status(400).json({ status: "failed", err });
	}
};
