import axios from 'axios';

import { POST_LOGIN_ENDPOINT } from '@/utils/routes';

import type { TypeLoginUser } from '@/src/types/auth';

export const fetchPostLogin = async (payload: TypeLoginUser) => {
	try {
		const response = await axios.post(POST_LOGIN_ENDPOINT, {
			email: payload.email,
			password: payload.password,
		});

		return response.data;
	} catch (err) {
		console.error(`[fetchPostLogin] error: ${err}`);
	}
};
