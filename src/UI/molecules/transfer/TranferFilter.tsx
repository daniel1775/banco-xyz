import { View, StyleSheet } from 'react-native';

import { FormTextField } from '@/UI/atoms/form/FormTextField';
import { BaseText } from '@/UI/atoms/general/BaseText';
import { FilterTag } from '@/UI/atoms/general/FilterTag';
import { FilterDateTag } from '../../atoms/general/FilterDateTag';

type TransferFilterProps = {
	search: string;
	setSearch: (search: string) => void;
	filter: 'payeer' | 'value';
	setFilter: (filter: 'payeer' | 'value') => void;
	filterDate: Date | null;
	setFilterDate: (value: Date | null) => void;
};

export const TransferFilter = ({
	search,
	setSearch,
	filter,
	setFilter,
	filterDate,
	setFilterDate,
}: TransferFilterProps) => {
	const onPressFilterTag = () => {
		if (filter === 'payeer') {
			setFilter('value');
		} else {
			setFilter('payeer');
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.searchContainer}>
				<FormTextField
					placeholder='Search'
					type='string'
					value={search}
					onChangeText={setSearch}
				/>
			</View>
			<View style={styles.filterRow}>
				<BaseText>Filter by:</BaseText>
				<View style={styles.tagGroup}>
					<FilterTag
						text='Payeer'
						isSelected={filter === 'payeer'}
						onPress={onPressFilterTag}
					/>
					<FilterTag
						text='Value'
						isSelected={filter === 'value'}
						onPress={onPressFilterTag}
					/>
				</View>
			</View>
			<View style={styles.dateRow}>
				<BaseText>Date:</BaseText>
				<View style={styles.tagGroup}>
					<FilterDateTag
						text='Fecha'
						value={filterDate}
						onChange={setFilterDate}
					/>
					{filterDate && (
						<FilterTag
							text='Limpiar'
							isSelected={false}
							onPress={() => setFilterDate(null)}
						/>
					)}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	searchContainer: {
		width: '100%',
		marginBottom: 10,
	},
	filterRow: {
		flexDirection: 'row',
		gap: 12,
		alignItems: 'center',
		marginBottom: 20,
	},
	tagGroup: {
		flexDirection: 'row',
		gap: 10,
	},
	dateRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
});
