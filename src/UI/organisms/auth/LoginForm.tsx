import { View, StyleSheet } from 'react-native';

import { FormTextField } from '@/src/UI/atoms/form/FormTextField';
import { useState } from 'react';

export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '80%',
		gap: 10,
	},
});
