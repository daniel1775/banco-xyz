import AsyncStorage from '@react-native-async-storage/async-storage';

import { TypeLoginUserResponse } from '@/src/types/auth';

import { getAuthUser, saveAuthUser } from '../user';

jest.mock('@react-native-async-storage/async-storage', () => ({
	setItem: jest.fn(),
	getItem: jest.fn(),
}));

const mockUser: TypeLoginUserResponse = {
	token: 'fake-token',
	user: {
		id: 1,
		name: 'John Doe',
		email: 'john@example.com',
	},
};

describe('User Store tests', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('saveAuthUser tests', () => {
		it('should save user to AsyncStorage', async () => {
			await saveAuthUser(mockUser);
			expect(AsyncStorage.setItem).toHaveBeenCalledWith(
				'user',
				JSON.stringify(mockUser),
			);
		});
	});

	describe('getAuthUser tests', () => {
		it('should return parsed user from AsyncStorage when data exists', async () => {
			(AsyncStorage.getItem as jest.Mock).mockResolvedValue(
				JSON.stringify(mockUser),
			);
			const result = await getAuthUser();
			expect(result).toEqual(mockUser);
			expect(AsyncStorage.getItem).toHaveBeenCalledWith('user');
		});

		it('should return null when no data exists in AsyncStorage', async () => {
			(AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
			const result = await getAuthUser();
			expect(result).toBeNull();
			expect(AsyncStorage.getItem).toHaveBeenCalledWith('user');
		});
	});
});
