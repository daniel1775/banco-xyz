import { formatTransferDate } from '../formatTransferDate';

describe('formatTransferDate', () => {
	it('should format a regular date correctly', () => {
		const date = new Date('2026-04-12T15:44:30.000Z');
		const result = formatTransferDate(date);
		expect(result).toBe('2026-04-12');
	});

	it('should format a date with single digit month and day correctly', () => {
		const date = new Date('2026-01-05T10:00:00.000Z');
		const result = formatTransferDate(date);
		expect(result).toBe('2026-01-05');
	});

	it('should format a date at the start of the year correctly', () => {
		const date = new Date('2026-01-01T00:00:00.000Z');
		const result = formatTransferDate(date);
		expect(result).toBe('2026-01-01');
	});

	it('should format a date at the end of the year correctly', () => {
		const date = new Date('2026-12-31T23:59:59.999Z');
		const result = formatTransferDate(date);
		expect(result).toBe('2026-12-31');
	});
});
