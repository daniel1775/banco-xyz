import { StyleSheet, Text, View } from 'react-native';

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
		<View style={styles.cardContainer}>
			<View style={styles.header}>
				<View style={styles.userInfo}>
					{name && <Text style={styles.name}>{name}</Text>}
					{email && <Text style={styles.email}>{email}</Text>}
				</View>
			</View>

			<View style={styles.divider} />

			<View style={styles.balanceSection}>
				<Text style={styles.balanceLabel}>Account Balance</Text>
				<View style={styles.amountContainer}>
					<Text style={styles.currency}>{currency || '$'}</Text>
					<Text style={styles.amount}>
						{accountBalance !== undefined ? accountBalance.toFixed(2) : '--'}
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: '#ffffff',
		borderRadius: 16,
		padding: 24,
		width: '100%',
		borderWidth: 1,
		borderColor: '#e0e0e0',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.05,
		shadowRadius: 8,
		elevation: 3,
		marginBottom: 20,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	userInfo: {
		flex: 1,
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#1d1d1dff',
		marginBottom: 4,
	},
	email: {
		fontSize: 14,
		color: '#797575ff',
	},
	divider: {
		height: 1,
		backgroundColor: '#f0f0f0',
		marginVertical: 20,
	},
	balanceSection: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	balanceLabel: {
		fontSize: 13,
		color: '#797575ff',
		marginBottom: 8,
		textTransform: 'uppercase',
		letterSpacing: 1,
		fontWeight: '600',
	},
	amountContainer: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 6,
	},
	currency: {
		fontSize: 20,
		fontWeight: '600',
		color: '#1d1d1dff',
		marginTop: 4,
	},
	amount: {
		fontSize: 42,
		fontWeight: 'bold',
		color: '#1d1d1dff',
		letterSpacing: -1,
	},
});
