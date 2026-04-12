import { useQueryGetTransferList } from '@/src/hooks/queries/useQueryGetTransferList';
import { Text, View } from 'react-native';

export default function TransferListScreen() {
	const { transferList } = useQueryGetTransferList();

	return (
		<View>
			<Text>TransferListScreen</Text>
		</View>
	);
}
