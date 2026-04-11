import { useMutation } from '@tanstack/react-query';

import { TypeLoginUser } from '@/src/types/auth';
import { fetchPostLogin } from '@/src/api/fetchPostLogin';

export const useQueryLoginUser = () => {
	const mutation = useMutation({
		mutationKey: ['login'],
		mutationFn: async (payload: TypeLoginUser) => {
			return fetchPostLogin(payload);
		},
	});

	return {
		submitLogin: mutation.mutateAsync,
		isLoading: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error,
	};
};
