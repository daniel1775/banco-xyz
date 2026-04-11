import { StyleSheet, Text } from 'react-native';

type TitleProps = {
	children: React.ReactNode;
	size?: 'h1' | 'h2' | 'h3' | 'h4';
};

export const Title = ({ children, size = 'h1' }: TitleProps) => {
	return <Text style={styles[size]}>{children}</Text>;
};

const styles = StyleSheet.create({
	h1: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	h2: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	h3: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	h4: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
