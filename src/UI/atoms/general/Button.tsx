import {
	ActivityIndicator,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
} from 'react-native';

type ButtonProps = PressableProps & {
	label: string;
	isLoading?: boolean;
};

export const Button = ({
	label,
	isLoading,
	disabled,
	style,
	...props
}: ButtonProps) => {
	const isButtonDisabled = disabled || isLoading;

	return (
		<Pressable
			{...props}
			disabled={isButtonDisabled}
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
				isButtonDisabled && styles.disabled,
				typeof style === 'object' ? style : {},
			]}
		>
			{isLoading ? (
				<ActivityIndicator
					testID='activity-indicator'
					color='#1d1d1dff'
					size='small'
				/>
			) : (
				<Text style={styles.label}>{label}</Text>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		backgroundColor: '#dfca32ff',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	pressed: {
		opacity: 0.8,
		transform: [{ scale: 0.98 }],
	},
	disabled: {
		backgroundColor: '#e0e0e0',
		opacity: 0.6,
	},
	label: {
		fontSize: 16,
		fontWeight: '600',
		color: '#1d1d1dff',
	},
});
