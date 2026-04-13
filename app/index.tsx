import { StyleSheet } from 'react-native';
import { Title } from '@/src/UI/atoms/general/Title';
import { LoginForm } from '@/src/UI/organisms/auth/LoginForm';
import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';

export default function Index() {
	return (
		<ScreenLayout
			containerStyles={styles.screenLayout}
		>
			<Title style={styles.title}>Banco XYZ</Title>
			<LoginForm />
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	screenLayout: {
		justifyContent: 'center',
		marginTop: -80,
	},
	title: {
		marginBottom: 40,
	},
});
