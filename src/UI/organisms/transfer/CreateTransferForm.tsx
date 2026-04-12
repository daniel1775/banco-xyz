import { StyleSheet, View } from 'react-native';
import { FormTextField } from '@/UI/atoms/form/FormTextField';
import { useState } from 'react';

type CreateTransferFormProps = {};

export const CreateTransferForm = ({}: CreateTransferFormProps) => {
	const [value, setValue] = useState('');
	const [currency, setCurrency] = useState('');
	const [payeerDocument, setPayeerDocument] = useState('');

	return (
		<View style={styles.container}>
			<FormTextField
				placeholder='Value'
				type='number'
				value={value}
				onChangeText={setValue}
			/>
			<FormTextField
				placeholder='Currency'
				type='string'
				value={currency}
				onChangeText={setCurrency}
			/>
			<FormTextField
				placeholder='Payeer Document'
				type='string'
				value={payeerDocument}
				onChangeText={setPayeerDocument}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		gap: 10,
	},
});
