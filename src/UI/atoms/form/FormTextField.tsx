import { TextInput, StyleSheet, View, Text } from 'react-native';

type FormTextFieldProps = {
	placeholder: string;
	type: 'string' | 'password' | 'number';
	value: string;
	onChangeText: (text: string) => void;
	label?: string;
	error?: string;
};

export const FormTextField = ({
	placeholder,
	type,
	value,
	onChangeText,
	label,
	error,
}: FormTextFieldProps) => {
	return (
		<View>
			{label && <Text style={styles.label}>{`${label}:`}</Text>}
			<TextInput
				style={[styles.container, !!error && styles.containerError]}
				placeholderTextColor={'#797575ff'}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				keyboardType={type === 'number' ? 'numeric' : 'default'}
				secureTextEntry={type === 'password'}
				autoCapitalize='none'
			/>
			{!!error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		borderWidth: 1,
		borderColor: '#1d1d1dff',
		borderRadius: 5,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	label: {
		marginBottom: 4,
	},
	containerError: {
		borderColor: '#d32f2f',
	},
	errorText: {
		color: '#d32f2f',
		fontSize: 12,
		marginTop: 4,
	},
});
