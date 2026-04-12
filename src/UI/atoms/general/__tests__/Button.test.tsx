import { fireEvent, render, screen } from '@testing-library/react-native';

import { Button } from '../Button';

describe('Button tests', () => {
	it('should render the label', () => {
		render(<Button label='Login' />);
		expect(screen.getByText('Login')).toBeTruthy();
	});

	it('should call onPress when pressed', () => {
		const mockOnPress = jest.fn();
		render(
			<Button
				label='Login'
				onPress={mockOnPress}
			/>,
		);

		fireEvent.press(screen.getByText('Login'));

		expect(mockOnPress).toHaveBeenCalledTimes(1);
	});

	it('should show ActivityIndicator and hide label when isLoading is true', () => {
		render(
			<Button
				label='Login'
				isLoading
			/>,
		);

		expect(screen.queryByText('Login')).toBeNull();
		expect(screen.getByTestId('activity-indicator')).toBeTruthy();
	});

	it('should be disabled when isLoading is true', () => {
		const mockOnPress = jest.fn();
		render(
			<Button
				label='Login'
				isLoading
				onPress={mockOnPress}
			/>,
		);

		fireEvent.press(screen.getByTestId('activity-indicator'));

		expect(mockOnPress).not.toHaveBeenCalled();
	});

	it('should be disabled when disabled prop is true', () => {
		const mockOnPress = jest.fn();
		render(
			<Button
				label='Login'
				disabled
				onPress={mockOnPress}
			/>,
		);

		fireEvent.press(screen.getByText('Login'));

		expect(mockOnPress).not.toHaveBeenCalled();
	});
});
