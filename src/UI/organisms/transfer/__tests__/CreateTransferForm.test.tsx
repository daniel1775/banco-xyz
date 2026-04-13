import {
	fireEvent,
	render,
	screen,
	waitFor,
} from '@testing-library/react-native';

import { CreateTransferForm } from '../CreateTransferForm';
import { useQueryPostTransfer } from '@/src/hooks/queries/useQueryPostTransfer';

jest.mock('@/src/hooks/queries/useQueryPostTransfer', () => ({
	useQueryPostTransfer: jest.fn(),
}));

const mockSubmitTransfer = jest.fn();

describe('CreateTransferForm tests', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		(useQueryPostTransfer as jest.Mock).mockReturnValue({
			submitTransfer: mockSubmitTransfer,
			isLoading: false,
		});
	});

	it('should render all form fields and submit button', async () => {
		render(<CreateTransferForm />);

		await waitFor(() => {
			expect(screen.getByPlaceholderText('Value')).toBeTruthy();
			expect(screen.getByPlaceholderText('Currency')).toBeTruthy();
			expect(screen.getByPlaceholderText('Payeer document')).toBeTruthy();
			expect(screen.getByText('Send')).toBeTruthy();
		});
	});

	it('should show validation errors when fields are empty', async () => {
		render(<CreateTransferForm />);

		fireEvent.press(screen.getByText('Send'));

		await waitFor(() => {
			expect(screen.getByText('Value is required.')).toBeTruthy();
			expect(screen.getByText('Currency is required.')).toBeTruthy();
			expect(screen.getByText('Payeer document is required.')).toBeTruthy();
		});
	});

	it('should show error when value is not a positive number', async () => {
		render(<CreateTransferForm />);

		fireEvent.changeText(screen.getByPlaceholderText('Value'), '-10');
		fireEvent.press(screen.getByText('Send'));

		await waitFor(() => {
			expect(
				screen.getByText('Value must be a valid positive number.'),
			).toBeTruthy();
		});
	});

	it('should update field values when text is entered', async () => {
		render(<CreateTransferForm />);

		const valueInput = screen.getByPlaceholderText('Value');
		const currencyInput = screen.getByPlaceholderText('Currency');
		const documentInput = screen.getByPlaceholderText('Payeer document');

		fireEvent.changeText(valueInput, '100');
		fireEvent.changeText(currencyInput, 'USD');
		fireEvent.changeText(documentInput, '12345678');

		await waitFor(() => {
			expect(valueInput.props.value).toBe('100');
			expect(currencyInput.props.value).toBe('USD');
			expect(documentInput.props.value).toBe('12345678');
		});
	});

	it('should call submitTransfer and show success modal on successful submission', async () => {
		mockSubmitTransfer.mockResolvedValue({});
		render(<CreateTransferForm />);

		fireEvent.changeText(screen.getByPlaceholderText('Value'), '200');
		fireEvent.changeText(screen.getByPlaceholderText('Currency'), 'EUR');
		fireEvent.changeText(
			screen.getByPlaceholderText('Payeer document'),
			'87654321',
		);

		fireEvent.press(screen.getByText('Send'));

		await waitFor(() => {
			expect(mockSubmitTransfer).toHaveBeenCalledWith({
				value: 200,
				currency: 'EUR',
				payeerDocument: '87654321',
				transferDate: expect.any(Date),
			});
		});

		expect(await screen.findByText('Transfer created correctly!')).toBeTruthy();
	});
});
