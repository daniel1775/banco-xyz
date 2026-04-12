import { Title } from '@/src/UI/atoms/general/Title';
import { LoginForm } from '@/src/UI/organisms/auth/LoginForm';
import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';

export default function Index() {
	return (
		<ScreenLayout
			containerStyles={{ justifyContent: 'center', marginTop: -80 }}
		>
			<Title style={{ marginBottom: 40 }}>Banco XYZ</Title>
			<LoginForm />
		</ScreenLayout>
	);
}
