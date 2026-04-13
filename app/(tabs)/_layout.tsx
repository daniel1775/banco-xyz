import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
	const insets = useSafeAreaInsets();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#000000',
				tabBarInactiveTintColor: '#b0b0b0',
				tabBarStyle: [
					styles.tabBar,
					{
						height: 60 + insets.bottom,
						paddingBottom: insets.bottom ? insets.bottom : 8,
					},
				],
				tabBarLabelStyle: styles.tabBarLabel,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Balance',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='wallet-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='transfer'
				options={{
					title: 'Transfer',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='swap-horizontal-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='transfer-list'
				options={{
					title: 'List',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='list-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: '#ffffff',
		borderTopColor: '#e0e0e0',
		borderTopWidth: 1,
		paddingTop: 8,
	},
	tabBarLabel: {
		fontSize: 12,
		fontWeight: '700',
	},
});
