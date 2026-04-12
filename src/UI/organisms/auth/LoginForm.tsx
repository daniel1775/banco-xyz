import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import { useQueryLoginUser } from '@/src/hooks/queries/useQueryLoginUser';
import { useRenderError } from '@/src/hooks/auth/useRenderLoginError';

import { FormTextField } from '@/src/UI/atoms/form/FormTextField';
import { Button } from '@/src/UI/atoms/general/Button';
import { saveAuthUser } from '@/src/store/user';

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const { submitLogin, isLoading, error } = useQueryLoginUser();
	const { renderError } = useRenderError({
		error,
		email,
		password,
	});

	return (
		<View style={styles.container}>
			<FormTextField
				placeholder='Email'
				type='string'
				value={email}
				onChangeText={setEmail}
			/>
			<FormTextField
				placeholder='Password'
				type='password'
				value={password}
				onChangeText={setPassword}
			/>
			{renderError()}
			<Button
				label='Login'
				onPress={async () => {
					const user = await submitLogin({ email, password });
					if (user) {
						saveAuthUser(user);
						router.push('/(tabs)');
					}
				}}
				isLoading={isLoading}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		gap: 10,
	},
});
