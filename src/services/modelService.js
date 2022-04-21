export const findAdvert = async (model, id) => {
	const getItem = await model.findById(id);
	return getItem;
};

export const createAdvert = async (model, item) => {
	const createItem = await model.create(item);
	return createItem;
};

export const deleteAdvert = async (model, item) => {
	await model.findByIdAndDelete(item);
};

export const viewAllAdvert = async (model) => {
	const allItem = await await model.find();
	return allItem;
};
