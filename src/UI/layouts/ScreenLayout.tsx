import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScreenLayoutProps = {
	children: ReactNode;
	containerStyles?: StyleProp<ViewStyle>;
};

export const ScreenLayout = ({
	children,
	containerStyles,
}: ScreenLayoutProps) => {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				styles.container,
				{
					paddingTop: insets.top,
				},
				containerStyles,
			]}
		>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
		backgroundColor: '#f3f3cfff',
		alignItems: 'center',
	},
});
