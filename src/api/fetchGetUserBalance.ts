import axios from 'axios';

import { GET_BALANCE_ENDPOINT } from '@/utils/routes';
import { getAuthUser } from '@/store/user';

import type { TypeUserBalanceResponse } from '@/types/balance';

export const fetchGetUserBalance = async () => {
	const user = await getAuthUser();

	try {
		const response = await axios.get(GET_BALANCE_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		});
		return response.data as TypeUserBalanceResponse;
	} catch (err) {
		console.error(`[fetchGetUserBalance] error: ${err}`);
		throw err;
	}
};
