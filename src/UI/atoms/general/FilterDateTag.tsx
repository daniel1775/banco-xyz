import { Pressable, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

import { BaseText } from '@/UI/atoms/general/BaseText';

type FilterDateTagProps = {
	text: string;
	value: Date | null;
	onChange: (date: Date) => void;
};

export const FilterDateTag = ({ text, value, onChange }: FilterDateTagProps) => {
	const [showModal, setShowModal] = useState(false);

	const displayText = value
		? `${text}: ${value.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' })}`
		: text;

	return (
		<Pressable
			onPress={() => setShowModal(true)}
			style={[styles.tag, value ? styles.selected : styles.notSelected]}
		>
			<BaseText>{displayText}</BaseText>
			{showModal && (
				<DateTimePicker
					value={value || new Date()}
					mode="date"
					display="default"
					style={styles.datePicker}
					onValueChange={(event, date) => {
						setShowModal(false);
						if (date) {
							onChange(date);
						}
					}}
				/>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	tag: {
		padding: 8,
		borderRadius: 8,
		overflow: 'hidden',
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selected: {
		backgroundColor: '#dfca32ff',
	},
	notSelected: {
		backgroundColor: '#e0e0e0',
	},
	datePicker: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		flex: 1,
		right: 0,
		zIndex: 100,
		opacity: 0.011,
	},
});
