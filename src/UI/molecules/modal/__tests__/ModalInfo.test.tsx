import { fireEvent, render, screen } from '@testing-library/react-native';

import { ModalInfo } from '../ModalInfo';

describe('ModalInfo tests', () => {
	const defaultProps = {
		visible: true,
		title: 'Test Title',
		message: 'Test Message',
		onClose: jest.fn(),
	};

	it('should render the title and message when visible', () => {
		render(<ModalInfo {...defaultProps} />);

		expect(screen.getByText('Test Title')).toBeTruthy();
		expect(screen.getByText('Test Message')).toBeTruthy();
	});

	it('should show the Accept button and call onClose when pressed', () => {
		const mockOnClose = jest.fn();
		render(
			<ModalInfo
				{...defaultProps}
				onClose={mockOnClose}
			/>,
		);

		const acceptButton = screen.getByText('Accept');
		expect(acceptButton).toBeTruthy();

		fireEvent.press(acceptButton);
		expect(mockOnClose).toHaveBeenCalledTimes(1);
	});

	it('should not render the message if it is not provided', () => {
		render(
			<ModalInfo
				{...defaultProps}
				message={undefined}
			/>,
		);

		expect(screen.getByText('Test Title')).toBeTruthy();
		expect(screen.queryByText('Test Message')).toBeNull();
	});

	it('should not show content if visible is false', () => {
		render(
			<ModalInfo
				{...defaultProps}
				visible={false}
			/>,
		);

		expect(screen.queryByText('Test Title')).toBeNull();
	});
});
