export const notEmpty = (value, msg) => {
	if (value === "") {
		throw new Error(msg);
	}

	return true;
};
