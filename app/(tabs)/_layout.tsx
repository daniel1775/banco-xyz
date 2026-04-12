import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Balance',
				}}
			/>
			<Tabs.Screen
				name='transfer'
				options={{
					title: 'Transfer',
				}}
			/>
			<Tabs.Screen
				name='transfer-list'
				options={{
					title: 'List',
				}}
			/>
		</Tabs>
	);
}
