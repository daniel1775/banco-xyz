import { useQuery } from '@tanstack/react-query';

import { fetchGetUserBalance } from '@/api/fetchGetUserBalance';

export const useQueryGetBalance = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['userBalance'],
		queryFn: async () => {
			const response = await fetchGetUserBalance();
			return response;
		},
	});

	return { userBalanceData: data, isLoading, error };
};
