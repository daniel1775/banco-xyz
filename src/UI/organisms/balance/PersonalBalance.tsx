import { StyleSheet, View } from 'react-native';

import { BaseText } from '@/src/UI/atoms/general/BaseText';

type PersonalBalanceProps = {
	currency?: string;
	accountBalance?: number;
	name?: string;
	email?: string;
};

export const PersonalBalance = ({
	currency,
	accountBalance,
	name,
	email,
}: PersonalBalanceProps) => {
	return (
		<View style={styles.container}>
			{name && <BaseText size='xl'>{'Name: ' + name}</BaseText>}
			{email && <BaseText size='xl'>{'Email: ' + email}</BaseText>}
			{currency && <BaseText size='xl'>{'Currency: ' + currency}</BaseText>}
			{accountBalance && (
				<BaseText size='xl'>{'Account Balance: ' + accountBalance}</BaseText>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
		width: '90%',
		borderRadius: 10,
		padding: 10,
		gap: 16,
	},
});
