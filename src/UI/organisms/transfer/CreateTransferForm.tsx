import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import { useQueryPostTransfer } from '@/src/hooks/queries/useQueryPostTransfer';

import { FormTextField } from '@/UI/atoms/form/FormTextField';
import { FormDateField } from '@/UI/atoms/form/FormDateField';
import { Button } from '@/src/UI/atoms/general/Button';

import type { TypeFormErrors } from '@/src/types/transfer';

export const CreateTransferForm = () => {
	const [value, setValue] = useState('');
	const [currency, setCurrency] = useState('');
	const [payeerDocument, setPayeerDocument] = useState('');
	const [date, setDate] = useState(new Date());
	const [errors, setErrors] = useState<TypeFormErrors>({});

	const { submitTransfer, isLoading } = useQueryPostTransfer();

	const validate = (): boolean => {
		const newErrors: TypeFormErrors = {};

		if (!value.trim()) {
			newErrors.value = 'Value is required.';
		} else if (isNaN(Number(value)) || Number(value) <= 0) {
			newErrors.value = 'Value must be a valid positive number.';
		}

		if (!currency.trim()) {
			newErrors.currency = 'Currency is required.';
		}

		if (!payeerDocument.trim()) {
			newErrors.payeerDocument = 'Payeer document is required.';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async () => {
		const isValid = validate();
		if (!isValid) return;

		await submitTransfer({
			value: Number(value),
			currency,
			payeerDocument,
			transferDate: date,
		});
	};

	return (
		<View style={styles.container}>
			<FormTextField
				label='Value'
				placeholder='Value'
				type='number'
				value={value}
				onChangeText={setValue}
				error={errors.value}
			/>
			<FormTextField
				label='Currency'
				placeholder='Currency'
				type='string'
				value={currency}
				onChangeText={setCurrency}
				error={errors.currency}
			/>
			<FormTextField
				label='Payeer document'
				placeholder='Payeer document'
				type='string'
				value={payeerDocument}
				onChangeText={setPayeerDocument}
				error={errors.payeerDocument}
			/>
			<FormDateField
				value={date}
				setValue={setDate}
				placeholder='Transfer date'
				label='Tranfer date'
			/>
			<Button
				label='Send'
				isLoading={isLoading}
				onPress={handleSubmit}
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
