import { Modal, StyleSheet, View } from 'react-native';

import { BaseText } from '@/src/UI/atoms/general/BaseText';
import { Title } from '@/src/UI/atoms/general/Title';
import { Button } from '@/src/UI/atoms/general/Button';

type TypeModalInfoProps = {
	visible: boolean;
	title: string;
	message?: string;
	onClose: () => void;
};

export const ModalInfo = ({
	visible,
	title,
	message,
	onClose,
}: TypeModalInfoProps) => {
	return (
		<Modal
			visible={visible}
			transparent
			animationType='fade'
		>
			<View style={styles.container}>
				<View style={styles.modal}>
					<View style={styles.textContainer}>
						<Title
							size='h2'
							style={styles.title}
						>
							{title}
						</Title>
						{message && <BaseText style={styles.message}>{message}</BaseText>}
					</View>

					<Button
						label='Accept'
						onPress={onClose}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modal: {
		backgroundColor: '#f3f3cfff',
		padding: 24,
		borderRadius: 16,
		width: '85%',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	textContainer: {
		marginBottom: 24,
		alignItems: 'center',
	},
	title: {
		textAlign: 'center',
		marginBottom: 12,
	},
	message: {
		textAlign: 'center',
		color: '#4a4a4aff',
	},
});
