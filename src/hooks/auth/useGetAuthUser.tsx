import { useEffect, useState } from 'react';

import { getAuthUser } from '@/src/store/user';

import type { TypeLoginUserResponse } from '@/src/types/auth';

export const useGetAuthUser = () => {
	const [authUser, setAuthUser] = useState<TypeLoginUserResponse | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			const user = await getAuthUser();
			setAuthUser(user);
		};
		fetchUser();
	}, []);

	return { authUser };
};
