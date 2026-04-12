import { renderHook } from '@testing-library/react-native';
import axios from 'axios';

import { useRenderError } from '../useRenderLoginError';

jest.mock('axios', () => ({
	isAxiosError: jest.fn(),
}));

describe('useRenderError tests', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should return null initially when no error is provided', () => {
		const { result } = renderHook(() =>
			useRenderError({ error: null, email: '', password: '' }),
		);
		expect(result.current.renderError()).toBeNull();
	});

	it('should return specific error message for 401 status', () => {
		(axios.isAxiosError as unknown as jest.Mock).mockReturnValue(true);

		const { result, rerender } = renderHook(
			(props: any) => useRenderError(props),
			{
				initialProps: { error: null as any, email: '', password: '' },
			},
		);

		const mockError = { response: { status: 401 } };

		rerender({ error: mockError, email: '', password: '' });

		const rendered = result.current.renderError();
		expect(rendered).not.toBeNull();
		expect(rendered?.props.message).toBe(
			'Email or password incorrect\nPlease try again',
		);
	});

	it('should return generic error message for non-401 axios errors', () => {
		(axios.isAxiosError as unknown as jest.Mock).mockReturnValue(true);

		const { result, rerender } = renderHook(
			(props: any) => useRenderError(props),
			{
				initialProps: { error: null as any, email: '', password: '' },
			},
		);

		const mockError = { response: { status: 500 } };

		rerender({ error: mockError, email: '', password: '' });

		const rendered = result.current.renderError();
		expect(rendered).not.toBeNull();
		expect(rendered?.props.message).toBe(
			'Something went wrong. Try again later.',
		);
	});

	it('should hide error when email changes', () => {
		(axios.isAxiosError as unknown as jest.Mock).mockReturnValue(true);

		const { result, rerender } = renderHook(
			(props: any) => useRenderError(props),
			{
				initialProps: {
					error: null as any,
					email: 'test@test.com',
					password: 'pwd',
				},
			},
		);

		const mockError = { response: { status: 401 } };

		rerender({ error: mockError, email: 'test@test.com', password: 'pwd' });
		expect(result.current.renderError()).not.toBeNull();

		rerender({ error: mockError, email: 'new@test.com', password: 'pwd' });

		expect(result.current.renderError()).toBeNull();
	});

	it('should hide error when password changes', () => {
		(axios.isAxiosError as unknown as jest.Mock).mockReturnValue(true);

		const { result, rerender } = renderHook(
			(props: any) => useRenderError(props),
			{
				initialProps: {
					error: null as any,
					email: 'test@test.com',
					password: 'pwd',
				},
			},
		);

		const mockError = { response: { status: 401 } };

		// Display error first
		rerender({ error: mockError, email: 'test@test.com', password: 'pwd' });
		expect(result.current.renderError()).not.toBeNull();

		// Change password
		rerender({ error: mockError, email: 'test@test.com', password: 'new' });

		// Check error is hidden
		expect(result.current.renderError()).toBeNull();
	});
});
