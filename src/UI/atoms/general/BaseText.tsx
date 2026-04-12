import { StyleSheet, Text, TextProps } from 'react-native';

export const BaseText = ({ children, style }: TextProps) => {
	return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		color: '#000000',
	},
});
