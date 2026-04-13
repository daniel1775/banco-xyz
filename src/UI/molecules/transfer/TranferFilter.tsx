import { View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { FormTextField } from '@/src/UI/atoms/form/FormTextField';
import { BaseText } from '@/src/UI/atoms/general/BaseText';
import { FilterTag } from '@/src/UI/atoms/general/FilterTag';
import { FilterDateTag } from '@/src/UI/atoms/general/FilterDateTag';

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
					rightIcon={search ? 'close-circle' : undefined}
					onPressRightIcon={() => setSearch('')}
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
				<BaseText>Filter by date:</BaseText>
				<View style={styles.tagGroup}>
					<FilterDateTag
						value={filterDate}
						onChange={setFilterDate}
					/>
					{filterDate && (
						<Pressable
							style={styles.closeButton}
							onPress={() => setFilterDate(null)}
							testID='clear-date-button'
						>
							<Ionicons
								name='close-circle'
								size={20}
								color='#797575ff'
							/>
						</Pressable>
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
	closeButton: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});
