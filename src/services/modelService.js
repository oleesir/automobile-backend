// const findChasisNumber = async (model, item) => {
// 	const getItem = await model.findOne({ chasisNum: item });
// 	return getItem;
// };

export const createAdvert = async (model, item) => {
	const createItem = await model.create(item);
	return createItem;
};
