import {
	fireEvent,
	render,
	screen,
	waitFor,
} from '@testing-library/react-native';

import { LoginForm } from '../LoginForm';
import { saveAuthUser } from '@/src/store/user';
import { useQueryLoginUser } from '@/src/hooks/queries/useQueryLoginUser';

jest.mock('@/src/hooks/queries/useQueryLoginUser', () => ({
	useQueryLoginUser: jest.fn(),
}));

jest.mock('@/src/hooks/auth/useRenderLoginError', () => ({
	useRenderError: () => ({
		renderError: () => null,
	}),
}));

jest.mock('@/src/store/user', () => ({
	saveAuthUser: jest.fn(),
}));

jest.mock('expo-router', () => ({
	useRouter: () => ({
		push: jest.fn(),
		replace: jest.fn(),
	}),
}));

const mockSubmitLogin = jest.fn();

describe('LoginForm tests', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		(useQueryLoginUser as jest.Mock).mockReturnValue({
			submitLogin: mockSubmitLogin,
			isLoading: false,
			error: null,
		});
	});

	it('should render email and password fields and a login button', () => {
		render(<LoginForm />);

		expect(screen.getByPlaceholderText('Email')).toBeTruthy();
		expect(screen.getByPlaceholderText('Password')).toBeTruthy();
		expect(screen.getByText('Login')).toBeTruthy();
	});

	it('should update email and password fields when typed', () => {
		render(<LoginForm />);

		fireEvent.changeText(
			screen.getByPlaceholderText('Email'),
			'test@email.com',
		);
		fireEvent.changeText(screen.getByPlaceholderText('Password'), 'secret123');

		expect(screen.getByPlaceholderText('Email').props.value).toBe(
			'test@email.com',
		);
		expect(screen.getByPlaceholderText('Password').props.value).toBe(
			'secret123',
		);
	});

	it('should call submitLogin with email and password on press', async () => {
		mockSubmitLogin.mockResolvedValue(null);
		render(<LoginForm />);

		fireEvent.changeText(screen.getByPlaceholderText('Email'), 'user@test.com');
		fireEvent.changeText(screen.getByPlaceholderText('Password'), 'pass1234');

		fireEvent.press(screen.getByText('Login'));

		await waitFor(() => {
			expect(mockSubmitLogin).toHaveBeenCalledWith({
				email: 'user@test.com',
				password: 'pass1234',
			});
		});
	});

	it('should call saveAuthUser when login is successful', async () => {
		const mockUser = {
			token: 'abc123',
			user: { id: 1, name: 'Test', email: 'user@test.com' },
		};
		mockSubmitLogin.mockResolvedValue(mockUser);
		render(<LoginForm />);

		fireEvent.changeText(screen.getByPlaceholderText('Email'), 'user@test.com');
		fireEvent.changeText(screen.getByPlaceholderText('Password'), 'pass1234');
		fireEvent.press(screen.getByText('Login'));

		await waitFor(() => {
			expect(jest.mocked(saveAuthUser)).toHaveBeenCalledWith(mockUser);
		});
	});

	it('should not call saveAuthUser when login returns null', async () => {
		mockSubmitLogin.mockResolvedValue(null);
		render(<LoginForm />);

		fireEvent.press(screen.getByText('Login'));

		await waitFor(() => {
			expect(jest.mocked(saveAuthUser)).not.toHaveBeenCalled();
		});
	});
});
