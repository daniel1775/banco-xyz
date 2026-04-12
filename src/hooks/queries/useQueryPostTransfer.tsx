import { useMutation } from '@tanstack/react-query';

import { fetchPostTransfer } from '@/api/fetchPostTransfer';

import type { TypePostTransferPayload } from '@/types/transfer';

export const useQueryPostTransfer = () => {
	const mutation = useMutation({
		mutationKey: ['createTransfer'],
		mutationFn: async (payload: TypePostTransferPayload) => {
			return fetchPostTransfer(payload);
		},
	});

	return {
		submitTransfer: mutation.mutateAsync,
		isLoading: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error,
	};
};
