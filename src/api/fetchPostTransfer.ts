import axios from 'axios';

import { POST_TRANSFER_ENDPOINT } from '@/utils/routes';

import type {
	TypePostTransferPayload,
	TypePostTransferResponse,
} from '@/types/transfer';

export const fetchPostTransfer = async (payload: TypePostTransferPayload) => {
	try {
		const response = await axios.post(POST_TRANSFER_ENDPOINT, {
			value: payload.value,
			currency: payload.currency,
			payeerDocument: payload.payeerDocument,
			transferDate: payload.transferDate,
		});

		return response.data as TypePostTransferResponse;
	} catch (err) {
		console.error(`[fetchPostTransfer] error: ${err}`);
		throw err;
	}
};
