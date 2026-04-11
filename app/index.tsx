import { Text, View } from 'react-native';

import { Title } from '@/src/UI/atoms/Title';

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#eaeaafff',
			}}
		>
			<Title size='h1'>Banco XYZ</Title>
		</View>
	);
}
