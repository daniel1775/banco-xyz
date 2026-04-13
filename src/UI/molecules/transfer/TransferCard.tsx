import { StyleSheet, Text, View } from 'react-native';

import type { TypeTransferListResponse } from '@/src/types/transfer';

type TransferCardProps = {
	transferData: TypeTransferListResponse;
};

export const TransferCard = ({ transferData }: TransferCardProps) => {
	const { value, currency, date, payeer } = transferData;

	return (
		<View style={styles.cardContainer}>
			<View style={styles.header}>
				<View style={styles.payeerInfo}>
					<Text style={styles.payeerName}>{payeer.name}</Text>
					<Text style={styles.document}>Doc: {payeer.document}</Text>
				</View>
				<View style={styles.amountInfo}>
					<Text style={styles.amount}>${value.toFixed(2)}</Text>
					<Text style={styles.currency}>{currency}</Text>
				</View>
			</View>

			<View style={styles.divider} />

			<View style={styles.footer}>
				<Text style={styles.dateLabel}>Fecha de transferencia</Text>
				<Text style={styles.date}>{date}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: '#ffffff',
		borderRadius: 12,
		padding: 16,
		marginBottom: 12,
		width: '100%',
		borderWidth: 1,
		borderColor: '#e0e0e0',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.05,
		shadowRadius: 4,
		elevation: 2,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	payeerInfo: {
		flex: 1,
	},
	payeerName: {
		fontSize: 16,
		fontWeight: '600',
		color: '#1d1d1dff',
		marginBottom: 4,
	},
	document: {
		fontSize: 13,
		color: '#797575ff',
	},
	amountInfo: {
		alignItems: 'flex-end',
	},
	amount: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#2e7d32',
	},
	currency: {
		fontSize: 12,
		color: '#797575ff',
		fontWeight: '500',
		marginTop: 2,
	},
	divider: {
		height: 1,
		backgroundColor: '#f0f0f0',
		marginVertical: 12,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dateLabel: {
		fontSize: 13,
		color: '#797575ff',
	},
	date: {
		fontSize: 13,
		color: '#1d1d1dff',
		fontWeight: '500',
	},
});
