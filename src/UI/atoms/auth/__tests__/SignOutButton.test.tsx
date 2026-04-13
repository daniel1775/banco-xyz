import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { useRouter } from 'expo-router';

import { SignOutButton } from '../SignOutButton';
import { removeAuthUser } from '@/src/store/user';

jest.mock('expo-router', () => ({
	useRouter: jest.fn(),
}));

jest.mock('@/src/store/user', () => ({
	removeAuthUser: jest.fn(),
}));

describe('SignOutButton', () => {
	const mockReplace = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
		(useRouter as jest.Mock).mockReturnValue({
			replace: mockReplace,
		});
	});

	it('should render correctly with the correct label', () => {
		const { getByText } = render(<SignOutButton />);
		expect(getByText('Sign Out')).toBeTruthy();
	});

	it('should call removeAuthUser and navigate replace when pressed', async () => {
		const { getByText } = render(<SignOutButton />);

		fireEvent.press(getByText('Sign Out'));

		await waitFor(() => {
			expect(removeAuthUser).toHaveBeenCalledTimes(1);
			expect(mockReplace).toHaveBeenCalledWith('../');
		});
	});

	it('should handle errors appropriately without navigating', async () => {
		const consoleErrorSpy = jest
			.spyOn(console, 'error')
			.mockImplementation(() => {});
		const mockError = new Error('Network error');

		(removeAuthUser as jest.Mock).mockRejectedValueOnce(mockError);

		const { getByText } = render(<SignOutButton />);

		fireEvent.press(getByText('Sign Out'));

		await waitFor(() => {
			expect(removeAuthUser).toHaveBeenCalledTimes(1);
			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Error while sign out user: ',
				mockError,
			);
			expect(mockReplace).not.toHaveBeenCalled();
		});

		consoleErrorSpy.mockRestore();
	});
});
