import { Text, View } from 'react-native';

import { useQueryGetBalance } from '@/hooks/queries/useQueryGetBalance';

export default function BalanceScreen() {
	const { userBalanceData, isLoading, error } = useQueryGetBalance();

	return (
		<View>
			<Text>BalanceScreen</Text>
		</View>
	);
}
