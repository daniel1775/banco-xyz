import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TransferFilter } from '../TranferFilter';

// Mock Ionicons as it often causes issues in Jest environment
jest.mock('@expo/vector-icons', () => ({
	Ionicons: 'Ionicons',
}));

describe('TransferFilter tests', () => {
	const mockSetSearch = jest.fn();
	const mockSetFilter = jest.fn();
	const mockSetFilterDate = jest.fn();

	const defaultProps = {
		search: '',
		setSearch: mockSetSearch,
		filter: 'payeer' as const,
		setFilter: mockSetFilter,
		filterDate: null,
		setFilterDate: mockSetFilterDate,
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should renders correctly', () => {
		const { getByPlaceholderText, getByText } = render(
			<TransferFilter {...defaultProps} />,
		);

		expect(getByPlaceholderText('Search')).toBeTruthy();
		expect(getByText('Filter by:')).toBeTruthy();
		expect(getByText('Payeer')).toBeTruthy();
		expect(getByText('Value')).toBeTruthy();
		expect(getByText('Filter by date:')).toBeTruthy();
	});

	it('should calls setSearch when typing in search input', () => {
		const { getByPlaceholderText } = render(
			<TransferFilter {...defaultProps} />,
		);

		const input = getByPlaceholderText('Search');
		fireEvent.changeText(input, 'test search');

		expect(mockSetSearch).toHaveBeenCalledWith('test search');
	});

	it('should toggles filter from payeer to value when tag is pressed', () => {
		const { getByText } = render(<TransferFilter {...defaultProps} />);

		const payeerTag = getByText('Payeer');
		fireEvent.press(payeerTag);

		expect(mockSetFilter).toHaveBeenCalledWith('value');
	});

	it('should toggles filter from value to payeer when tag is pressed', () => {
		const { getByText } = render(
			<TransferFilter
				{...defaultProps}
				filter='value'
			/>,
		);

		const valueTag = getByText('Value');
		fireEvent.press(valueTag);

		expect(mockSetFilter).toHaveBeenCalledWith('payeer');
	});

	it('should clears search when pressing the clear icon', () => {
		const { getByTestId } = render(
			<TransferFilter
				{...defaultProps}
				search='some text'
			/>,
		);

		const clearButton = getByTestId('clear-button');
		fireEvent.press(clearButton);

		expect(mockSetSearch).toHaveBeenCalledWith('');
	});

	it('shows clear date button only when filterDate is selected', () => {
		const { queryByTestId, rerender } = render(
			<TransferFilter {...defaultProps} />,
		);

		expect(queryByTestId('clear-date-button')).toBeNull();

		const someDate = new Date('2023-01-01');
		rerender(
			<TransferFilter
				{...defaultProps}
				filterDate={someDate}
			/>,
		);

		expect(queryByTestId('clear-date-button')).toBeTruthy();
	});

	it('calls setFilterDate(null) when clear date button is pressed', () => {
		const someDate = new Date('2023-01-01');
		const { getByTestId } = render(
			<TransferFilter
				{...defaultProps}
				filterDate={someDate}
			/>,
		);

		const clearDateButton = getByTestId('clear-date-button');
		fireEvent.press(clearDateButton);

		expect(mockSetFilterDate).toHaveBeenCalledWith(null);
	});
});
