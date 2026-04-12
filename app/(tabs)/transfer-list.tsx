import { ScrollView, Text, View } from 'react-native';

import { useQueryGetTransferList } from '@/src/hooks/queries/useQueryGetTransferList';
import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { TransferCard } from '@/src/UI/molecules/transfer/TransferCard';
import { useState } from 'react';
import { FormTextField } from '@/src/UI/atoms/form/FormTextField';

export default function TransferListScreen() {
	const { transferList } = useQueryGetTransferList();
	const [search, setSearch] = useState('');

	return (
		<ScreenLayout>
			<Title style={{ marginBottom: 40 }}>Transfer list</Title>
			<View
				style={{
					width: '100%',
					marginBottom: 30,
				}}
			>
				<FormTextField
					placeholder='Search'
					type='string'
					value={search}
					onChangeText={setSearch}
				/>
			</View>
			<ScrollView
				style={{
					width: '100%',
				}}
			>
				{transferList?.map((transfer, index) => (
					<View key={index}>
						<TransferCard transferData={transfer} />
					</View>
				))}
			</ScrollView>
		</ScreenLayout>
	);
}
