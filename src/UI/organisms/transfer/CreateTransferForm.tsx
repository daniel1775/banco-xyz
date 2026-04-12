import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { FormTextField } from '@/UI/atoms/form/FormTextField';
import { FormDateField } from '@/UI/atoms/form/FormDateField';
import { Button } from '@/src/UI/atoms/general/Button';
import { useQueryPostTransfer } from '@/src/hooks/queries/useQueryPostTransfer';

type CreateTransferFormProps = {};

export const CreateTransferForm = ({}: CreateTransferFormProps) => {
	const [value, setValue] = useState('');
	const [currency, setCurrency] = useState('');
	const [payeerDocument, setPayeerDocument] = useState('');
	const [date, setDate] = useState(new Date());

	const { submitTransfer, isLoading } = useQueryPostTransfer();

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
				placeholder='Payeer document'
				type='string'
				value={payeerDocument}
				onChangeText={setPayeerDocument}
			/>
			<FormDateField
				value={date}
				setValue={setDate}
				placeholder='Transfer date'
			/>
			<Button
				label='Send'
				isLoading={isLoading}
				onPress={async () => {
					await submitTransfer({
						value: Number(value),
						currency,
						payeerDocument,
						transferDate: date,
					});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		gap: 20,
	},
});
