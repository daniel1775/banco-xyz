import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useQueryGetBalance } from '@/hooks/queries/useQueryGetBalance';

import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { BaseText } from '@/src/UI/atoms/general/BaseText';

export default function BalanceScreen() {
	const { userBalanceData, isLoading } = useQueryGetBalance();

	if (isLoading) {
		return (
			<ScreenLayout
				containerStyles={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<ActivityIndicator
					size='large'
					color='#0000ff'
				/>
			</ScreenLayout>
		);
	}

	return (
		<ScreenLayout>
			<Title>Profile</Title>
			<View style={styles.container}>
				<BaseText>{`Currency: ${userBalanceData?.currency}`}</BaseText>
				<BaseText>{`Balance: ${userBalanceData?.accountBalance}`}</BaseText>
			</View>
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
