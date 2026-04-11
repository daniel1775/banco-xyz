import { useMutation } from '@tanstack/react-query';

import { TypeLoginUser } from '@/src/types/auth';
import { fetchPostLogin } from '@/src/api/fetchPostLogin';

export const useQueryLoginUser = () => {
	return useMutation({
		mutationKey: ['login'],
		mutationFn: async (payload: TypeLoginUser) => {
			return fetchPostLogin(payload);
		},
	});
};
