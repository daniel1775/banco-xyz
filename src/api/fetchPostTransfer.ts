import axios from 'axios';

import { POST_TRANSFER_ENDPOINT } from '@/utils/routes';
import { getAuthUser } from '@/store/user';
import { formatTransferDate } from '@/utils/formatTransferDate';

import type {
	TypePostTransferPayload,
	TypePostTransferResponse,
} from '@/types/transfer';

export const fetchPostTransfer = async (payload: TypePostTransferPayload) => {
	const user = await getAuthUser();

	try {
		const date = formatTransferDate(payload.transferDate);

		const response = await axios.post(
			POST_TRANSFER_ENDPOINT,
			{
				value: payload.value,
				currency: payload.currency,
				payeerDocument: payload.payeerDocument,
				transferDate: date,
			},
			{
				headers: {
					Authorization: `Bearer ${user?.token}`,
				},
			},
		);

		return response.data as TypePostTransferResponse;
	} catch (err) {
		console.error(`[fetchPostTransfer] error: ${err}`);
		throw err;
	}
};
