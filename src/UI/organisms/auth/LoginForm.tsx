import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useState } from 'react';

import { useQueryLoginUser } from '@/src/hooks/queries/useQueryLoginUser';

import { FormTextField } from '@/src/UI/atoms/form/FormTextField';

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { submitLogin } = useQueryLoginUser();

	return (
		<View style={styles.container}>
			<FormTextField
				placeholder='Email'
				type='email'
				value={email}
				onChangeText={setEmail}
			/>
			<FormTextField
				placeholder='Password'
				type='password'
				value={password}
				onChangeText={setPassword}
			/>
			<Pressable
				onPress={() => submitLogin({ email, password })}
				style={{
					width: '100%',
					height: 50,
					backgroundColor: '#dfca32ff',
					borderRadius: 5,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>Login</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '80%',
		gap: 10,
	},
});
