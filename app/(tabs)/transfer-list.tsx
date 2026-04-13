import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import { useQueryGetTransferList } from '@/src/hooks/queries/useQueryGetTransferList';
import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { TransferCard } from '@/src/UI/molecules/transfer/TransferCard';
import { TransferFilter } from '@/UI/molecules/transfer/TranferFilter';

export default function TransferListScreen() {
	const { transferList } = useQueryGetTransferList();

	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<'payeer' | 'value'>('payeer');
	const [transferListToShow, setTransferListToShow] = useState(transferList);

	useEffect(() => {
		const handleFilter = () => {
			if (!search) {
				setTransferListToShow(transferList);
			}

			if (filter === 'payeer') {
				const transferFiltered = transferList?.filter((item) =>
					item.payeer.name.toLowerCase().includes(search.toLowerCase()),
				);
				setTransferListToShow(transferFiltered);
				return;
			}

			if (filter === 'value') {
				const transferFiltered = transferList?.filter((item) =>
					item.value.toString().includes(search),
				);
				setTransferListToShow(transferFiltered);
				return;
			}
		};

		handleFilter();
	}, [transferList, search]);

	return (
		<ScreenLayout>
			<Title style={{ marginBottom: 40 }}>Transfer list</Title>
			<TransferFilter
				search={search}
				setSearch={setSearch}
				filter={filter}
				setFilter={setFilter}
			/>
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
