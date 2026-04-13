import { Pressable, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

import { removeAuthUser } from '@/src/store/user';

export const SignOutButton = () => {
	const router = useRouter();

	const onPress = async () => {
		try {
			await removeAuthUser();
			router.replace('../');
		} catch (err) {
			console.error('Error while sign out user: ', err);
		}
	};

	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.container, pressed && styles.pressed]}
		>
			<Text style={styles.label}>Sign Out</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		backgroundColor: '#ffdbd9',
		borderWidth: 1,
		borderColor: '#d32f2f',
		borderRadius: 5,
		justifyContent: 'center',
		paddingHorizontal: 12,
		paddingVertical: 8,
		alignItems: 'center',
	},
	pressed: {
		opacity: 0.8,
		transform: [{ scale: 0.98 }],
	},
	label: {
		fontSize: 16,
		fontWeight: '600',
		color: '#d32f2f',
	},
});
