export type TypePostTransferPayload = {
	value: number;
	currency: string;
	payeerDocument: string;
	transferDate: Date;
};

export type TypePostTransferResponse = {
	status: string;
};

export type TypeTransferListResponse = {
	value: number;
	currency: string;
	date: string;
	payeer: {
		document: string;
		name: string;
	};
};

export type TypeFormErrors = {
	value?: string;
	currency?: string;
	payeerDocument?: string;
};
