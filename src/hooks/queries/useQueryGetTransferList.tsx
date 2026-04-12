import { useQuery } from '@tanstack/react-query';

import { fetchGetTransferList } from '@/api/fetchGetTransferList';

export const useQueryGetTransferList = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['transferList'],
		queryFn: async () => {
			const response = await fetchGetTransferList();
			return response;
		},
	});

	return {
		transferList: data,
		isLoading,
		error,
	};
};
