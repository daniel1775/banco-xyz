import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type FormTextFieldProps = {
	placeholder: string;
	type: 'string' | 'password' | 'number';
	value: string;
	onChangeText: (text: string) => void;
	label?: string;
	error?: string;
	rightIcon?: keyof typeof Ionicons.glyphMap;
	onPressRightIcon?: () => void;
};

export const FormTextField = ({
	placeholder,
	type,
	value,
	onChangeText,
	label,
	error,
	rightIcon,
	onPressRightIcon,
}: FormTextFieldProps) => {
	return (
		<View>
			{label && <Text style={styles.label}>{`${label}:`}</Text>}
			<View style={styles.inputWrapper}>
				<TextInput
					style={[styles.container, !!error && styles.containerError, !!rightIcon && styles.containerWithIcon]}
					placeholderTextColor={'#797575ff'}
					placeholder={placeholder}
					value={value}
					onChangeText={onChangeText}
					keyboardType={type === 'number' ? 'numeric' : 'default'}
					secureTextEntry={type === 'password'}
					autoCapitalize='none'
				/>
				{rightIcon && (
					<Pressable onPress={onPressRightIcon} style={styles.rightIcon}>
						<Ionicons name={rightIcon} size={20} color='#797575ff' />
					</Pressable>
				)}
			</View>
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
	inputWrapper: {
		position: 'relative',
		justifyContent: 'center',
	},
	rightIcon: {
		position: 'absolute',
		right: 12,
	},
	containerWithIcon: {
		paddingRight: 40,
	},
});
