import { StyleSheet } from 'react-native';
import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { CreateTransferForm } from '@/src/UI/organisms/transfer/CreateTransferForm';

export default function TransferScreen() {
	return (
		<ScreenLayout>
			<Title style={styles.title}>Create Transfer</Title>
			<CreateTransferForm />
		</ScreenLayout>
	);
}

const styles = StyleSheet.create({
	title: {
		marginBottom: 40,
	},
});
