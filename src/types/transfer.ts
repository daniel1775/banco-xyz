export type TypePostTransferPayload = {
	value: number;
	currency: string;
	payeerDocument: string;
	transferDate: Date;
};

export type TypePostTransferResponse = {
	status: string;
};
