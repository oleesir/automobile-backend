import { postAdvertService, getAdvertService } from "../services/carService";

export const createAdvert = async (req, res) => {
	try {
		const newAdvert = await postAdvertService(req.body, req.file);
		return res.status(201).json({ status: "success", newAdvert });
	} catch (err) {
		return res.status(400).json({ status: "failed", err });
	}
};

export const getAdvert = async (req, res) => {
	try {
		const { id } = req.params;
		const foundAdvert = await getAdvertService(id);
		return res.status(200).json({ status: "success", foundAdvert });
	} catch (error) {
		return res.status(400).json({ status: "failed", error: error.message });
	}
};
