import { Pressable, StyleSheet } from 'react-native';

import { BaseText } from '@/UI/atoms/general/BaseText';

type FilterTagProps = {
	text: string;
	isSelected: boolean;
	onPress: () => void;
};

export const FilterTag = ({ text, isSelected, onPress }: FilterTagProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={[
				{
					padding: 4,
					borderRadius: 8,
				},
				isSelected ? styles.selected : styles.notSelected,
			]}
		>
			<BaseText>{text}</BaseText>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	selected: {
		backgroundColor: '#dfca32ff',
		padding: 8,
		borderRadius: 8,
	},
	notSelected: {
		backgroundColor: '#e0e0e0',
		padding: 8,
		borderRadius: 8,
	},
});
