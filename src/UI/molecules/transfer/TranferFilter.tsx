import { View } from 'react-native';

import { FormTextField } from '@/UI/atoms/form/FormTextField';
import { BaseText } from '@/UI/atoms/general/BaseText';
import { FilterTag } from '@/UI/atoms/general/FilterTag';

type TransferFilterProps = {
	search: string;
	setSearch: (search: string) => void;
	filter: 'payeer' | 'value';
	setFilter: (filter: 'payeer' | 'value') => void;
};

export const TransferFilter = ({
	search,
	setSearch,
	filter,
	setFilter,
}: TransferFilterProps) => {
	const onPressFilterTag = () => {
		if (filter === 'payeer') {
			setFilter('value');
		} else {
			setFilter('payeer');
		}
	};

	return (
		<View
			style={{
				width: '100%',
			}}
		>
			<View
				style={{
					width: '100%',
					marginBottom: 10,
				}}
			>
				<FormTextField
					placeholder='Search'
					type='string'
					value={search}
					onChangeText={setSearch}
				/>
			</View>
			<View
				style={{
					flexDirection: 'row',
					gap: 12,
					alignItems: 'center',
					marginBottom: 20,
				}}
			>
				<BaseText>Filter by:</BaseText>
				<View
					style={{
						flexDirection: 'row',
						gap: 10,
					}}
				>
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
		</View>
	);
};
