export const formatTransferDate = (date: Date) => {
	const isoDate = date.toISOString();
	const formatedDate = isoDate.split('T')[0];

	return formatedDate;
};
