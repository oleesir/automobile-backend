import { validationResult } from "express-validator";

const userVlidation = (req, res, next) => {
	const result = validationResult(req).array();
	if (!result.length) return next();

	const error = result[0].msg;
	return res.json({ success: false, message: error });
};

export default userVlidation;
