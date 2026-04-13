import { Stack, useRouter } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

import { useGetAuthUser } from '@/src/hooks/auth/useGetAuthUser';

const queryClient = new QueryClient();

export default function RootLayout() {
	const router = useRouter();
	const { authUser } = useGetAuthUser();

	useEffect(() => {
		console.log('authUser', authUser);

		if (authUser) {
			router.push('/(tabs)');
		}
	}, [authUser]);

	return (
		<QueryClientProvider client={queryClient}>
			<Stack
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='index' />
				<Stack.Screen
					name='(tabs)'
					options={{ headerShown: false }}
				/>
			</Stack>
		</QueryClientProvider>
	);
}
