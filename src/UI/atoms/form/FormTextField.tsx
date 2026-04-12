import { TextInput, StyleSheet, View } from 'react-native';

type FormTextFieldProps = {
	placeholder: string;
	type: 'string' | 'password' | 'number';
	value: string;
	onChangeText: (text: string) => void;
};

export const FormTextField = ({
	placeholder,
	type,
	value,
	onChangeText,
}: FormTextFieldProps) => {
	return (
		<View>
			<TextInput
				style={styles.container}
				placeholderTextColor={'#797575ff'}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				keyboardType={type === 'number' ? 'numeric' : 'default'}
				secureTextEntry={type === 'password'}
			/>
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
});
