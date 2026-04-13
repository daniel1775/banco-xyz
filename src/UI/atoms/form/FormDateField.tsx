import { Pressable, StyleSheet, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

type FormDateFieldProps = {
	value: Date;
	setValue: (date: Date) => void;
	label?: string;
};

export const FormDateField = ({
	value,
	setValue,
	label,
}: FormDateFieldProps) => {
	const [showModal, setShowModal] = useState(false);

	const formattedDate = value.toLocaleDateString('es-ES', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});

	return (
		<View>
			{label && <Text style={styles.label}>{`${label}:`}</Text>}
			<Pressable
				style={styles.inputContainer}
				onPress={() => {
					setShowModal(true);
				}}
			>
				<Text style={styles.dateText}>{formattedDate}</Text>
				<View style={styles.iconButton}>
					<Ionicons
						name='calendar-outline'
						size={20}
						color='#797575ff'
					/>
				</View>
				{showModal && (
					<DateTimePicker
						value={value}
						mode='date'
						display='default'
						style={styles.datePicker}
						onValueChange={(event, date) => {
							setShowModal(false);
							if (date) setValue(date);
						}}
					/>
				)}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		width: '100%',
		height: 50,
		borderWidth: 1,
		borderColor: '#1d1d1dff',
		borderRadius: 5,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
	},
	dateText: {
		fontSize: 16,
		color: '#1d1d1dff',
	},
	iconButton: {
		padding: 4,
	},
	label: {
		marginBottom: 4,
	},
	datePicker: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		flex: 1,
		right: 0,
		zIndex: 100,
		opacity: 0.011,
	},
});
