import axios from 'axios';

import { getAuthUser } from '@/store/user';
import { GET_TRANSFER_LIST_ENDPOINT } from '@/utils/routes';

import type { TypeTransferListResponse } from '@/types/transfer';

export const fetchGetTransferList = async () => {
	const user = await getAuthUser();

	try {
		const response = await axios.get(GET_TRANSFER_LIST_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		});

		return response.data.transfers as TypeTransferListResponse[];
	} catch (err) {
		console.error(`[fetchGetTransferList] error: ${err}`);
		throw err;
	}
};
