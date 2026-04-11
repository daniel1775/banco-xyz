import { StyleSheet, Text, View } from 'react-native';

type ErrorMsgProps = {
	message: string;
};

export const ErrorMsg = ({ message }: ErrorMsgProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{message}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffebee',
		padding: 10,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#f44336',
		marginVertical: 10,
		width: '100%',
	},
	text: {
		color: '#d32f2f',
		fontSize: 14,
		textAlign: 'center',
		fontWeight: '500',
	},
});
