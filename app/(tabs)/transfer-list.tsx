import { FlatList, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

import { formatTransferDate } from '@/src/utils/formatTransferDate';
import { useQueryGetTransferList } from '@/src/hooks/queries/useQueryGetTransferList';

import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { TransferCard } from '@/src/UI/molecules/transfer/TransferCard';
import { TransferFilter } from '@/UI/molecules/transfer/TranferFilter';
import { Loading } from '@/src/UI/atoms/general/Loading';
import { useFilterTransfers } from '@/src/hooks/transfer/useFilterTransfers';

export default function TransferListScreen() {
	const { transferList, isLoading } = useQueryGetTransferList();

	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<'payeer' | 'value'>('payeer');
	const [filterDate, setFilterDate] = useState<Date | null>(null);
	const [transferListToShow, setTransferListToShow] = useState(transferList);

	useFilterTransfers({
		transferList,
		search,
		filter,
		filterDate,
		setTransferListToShow,
	});

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
			{isLoading ? (
				<View style={styles.loadingContainer}>
					<Loading />
				</View>
			) : (
				<FlatList
					data={transferListToShow}
					renderItem={({ item }) => <TransferCard transferData={item} />}
					keyExtractor={(item, index) => index.toString()}
					style={{
						width: '100%',
					}}
				/>
			)}
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 220,
	},
});
