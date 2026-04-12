import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useQueryGetBalance } from '@/hooks/queries/useQueryGetBalance';
import { useGetAuthUser } from '@/src/hooks/auth/useGetAuthUser';

import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { PersonalBalance } from '@/src/UI/organisms/balance/PersonalBalance';

export default function BalanceScreen() {
	const { userBalanceData, isLoading } = useQueryGetBalance();

	const { authUser } = useGetAuthUser();

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
			<Title style={styles.title}>Personal balance</Title>
			<View style={styles.container}>
				<PersonalBalance
					name={authUser?.user.name}
					email={authUser?.user.email}
					currency={userBalanceData?.currency}
					accountBalance={userBalanceData?.accountBalance}
				/>
			</View>
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
	},
	title: {
		marginBottom: 28,
	},
});
