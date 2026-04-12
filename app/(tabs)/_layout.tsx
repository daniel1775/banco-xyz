import { Tabs } from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen name='index' />
			<Tabs.Screen name='transfer-list' />
			<Tabs.Screen name='transfer' />
		</Tabs>
	);
}
