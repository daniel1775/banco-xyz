import { ScreenLayout } from '@/src/UI/layouts/ScreenLayout';
import { Title } from '@/src/UI/atoms/general/Title';
import { CreateTransferForm } from '@/src/UI/organisms/transfer/CreateTransferForm';

export default function TransferScreen() {
	return (
		<ScreenLayout>
			<Title style={{ marginBottom: 40 }}>Create Transfer</Title>
			<CreateTransferForm />
		</ScreenLayout>
	);
}
