import { StyleSheet, Text, TextProps } from 'react-native';

type BaseTextProps = TextProps & {
	size?: 'sm' | 'md' | 'lg' | 'xl';
};

export const BaseText = ({ children, style, size = 'lg' }: BaseTextProps) => {
	return <Text style={[styles.text, styles[size], style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: '#000000',
	},
	sm: {
		fontSize: 12,
	},
	md: {
		fontSize: 16,
	},
	lg: {
		fontSize: 18,
	},
	xl: {
		fontSize: 20,
	},
});
