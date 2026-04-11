import axios from 'axios';

import { POST_LOGIN_ENDPOINT } from '@/utils/routes';

export const fetchPostLogin = async (email: string, password: string) => {
	try {
		const response = await axios.post(POST_LOGIN_ENDPOINT, {
			email,
			password,
		});

		return response.data;
	} catch (err) {
		console.error(`[fetchPostLogin] error: ${err}`);
	}
};
