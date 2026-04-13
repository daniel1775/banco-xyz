import { StyleSheet, View } from 'react-native';

import { useQueryGetBalance } from '@/hooks/queries/useQueryGetBalance';
import { useGetAuthUser } from '@/src/hooks/auth/useGetAuthUser';

import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { PersonalBalance } from '@/src/UI/organisms/balance/PersonalBalance';
import { Loading } from '@/src/UI/atoms/general/Loading';
import { SignOutButton } from '@/src/UI/atoms/auth/SignOutButton';

export default function BalanceScreen() {
	const { userBalanceData, isLoading } = useQueryGetBalance();

	const { authUser } = useGetAuthUser();

	if (isLoading) {
		return (
			<ScreenLayout containerStyles={styles.loaderContainer}>
				<Loading />
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
			<View style={styles.signOutContainer}>
				<SignOutButton />
			</View>
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		width: '95%',
	},
	loaderContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	signOutContainer: {
		marginBottom: 24,
	},
	title: {
		marginBottom: 32,
	},
});
