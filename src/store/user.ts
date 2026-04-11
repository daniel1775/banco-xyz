import AsyncStorage from '@react-native-async-storage/async-storage';

import type { TypeLoginUserResponse } from '@/src/types/auth';

export const saveAuthUser = async (
	user: TypeLoginUserResponse,
): Promise<void> => {
	await AsyncStorage.setItem('user', JSON.stringify(user));
};

export const getAuthUser = async (): Promise<TypeLoginUserResponse | null> => {
	const user = await AsyncStorage.getItem('user');
	return user ? JSON.parse(user) : null;
};
