import { View, StyleSheet } from 'react-native';

import { Title } from '@/src/UI/atoms/general/Title';
import { LoginForm } from '@/src/UI/organisms/auth/LoginForm';

export default function Index() {
	return (
		<View style={styles.container}>
			<Title style={{ marginBottom: 40 }}>Banco XYZ</Title>
			<LoginForm />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f3f3cfff',
	},
});
