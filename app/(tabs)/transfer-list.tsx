import { FlatList, View } from 'react-native';
import { useEffect, useState } from 'react';

import { formatTransferDate } from '@/src/utils/formatTransferDate';
import { useQueryGetTransferList } from '@/src/hooks/queries/useQueryGetTransferList';

import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { TransferCard } from '@/src/UI/molecules/transfer/TransferCard';
import { TransferFilter } from '@/UI/molecules/transfer/TranferFilter';

export default function TransferListScreen() {
	const { transferList } = useQueryGetTransferList();

	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<'payeer' | 'value'>('payeer');
	const [filterDate, setFilterDate] = useState<Date | null>(null);
	const [transferListToShow, setTransferListToShow] = useState(transferList);

	useEffect(() => {
		const handleFilter = () => {
			let result = transferList;

			if (!result) return;

			if (search) {
				if (filter === 'payeer') {
					result = result.filter((item) =>
						item.payeer.name.toLowerCase().includes(search.toLowerCase()),
					);
				} else if (filter === 'value') {
					result = result.filter((item) =>
						item.value.toString().includes(search),
					);
				}
			}

			if (filterDate) {
				const dateFormatted = formatTransferDate(filterDate);

				result = result.filter((item) => item.date === dateFormatted);
			}

			setTransferListToShow(result);
		};

		handleFilter();
	}, [transferList, search, filter, filterDate]);

	return (
		<ScreenLayout>
			<Title style={{ marginBottom: 40 }}>Transfer list</Title>
			<TransferFilter
				search={search}
				setSearch={setSearch}
				filter={filter}
				setFilter={setFilter}
				filterDate={filterDate}
				setFilterDate={setFilterDate}
			/>
			<View
				style={{
					flexDirection: 'row',
					gap: 10,
					marginBottom: 20,
					alignItems: 'center',
				}}
			></View>
			<FlatList
				data={transferListToShow}
				renderItem={({ item }) => <TransferCard transferData={item} />}
				keyExtractor={(item, index) => index.toString()}
				style={{
					width: '100%',
				}}
			/>
		</ScreenLayout>
	);
}
