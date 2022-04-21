import {
	postAdvertService,
	getAdvertService,
	deleteAdvertService,
	getAllAdvertService,
} from "../services/advertService";

export const createAdvert = async (req, res) => {
	try {
		const data = await postAdvertService(req.body, req.file);
		return res.status(201).json({ status: "success", data });
	} catch (err) {
		return res.status(400).json({ status: "failed", err });
	}
};

export const getAdvert = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await getAdvertService(id);
		return res.status(200).json({ status: "success", data });
	} catch (error) {
		return res.status(400).json({ status: "failed", error: error.message });
	}
};

export const getAllAdvert = async (req, res) => {
	try {
		const data = await getAllAdvertService();
		return res.status(200).json({ status: "success", data });
	} catch (error) {
		return res.status(400).json({ status: "failed", error: error.message });
	}
};

export const removeAdvert = async (req, res) => {
	try {
		const { id } = req.params;
		await deleteAdvertService(id);
		return res.status(200).json({ status: "success", message: "deleted successfully" });
	} catch (error) {
		return res.status(400).json({ status: "failed", error: error.message });
	}
};
