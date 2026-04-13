import { Pressable, StyleSheet } from 'react-native';

import { BaseText } from '@/src/UI/atoms/general/BaseText';

type FilterTagProps = {
	text: string;
	isSelected: boolean;
	onPress: () => void;
};

export const FilterTag = ({ text, isSelected, onPress }: FilterTagProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={[styles.tag, isSelected ? styles.selected : styles.notSelected]}
		>
			<BaseText>{text}</BaseText>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	tag: {
		padding: 8,
		borderRadius: 8,
	},
	selected: {
		backgroundColor: '#dfca32ff',
	},
	notSelected: {
		backgroundColor: '#e0e0e0',
	},
});
