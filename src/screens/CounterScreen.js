import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);
	return (
		<View>
			<Button
				title='Increase'
				onPress={() => setCounter(counter + 1)}
			/>
			<Text style={styles.counter}>Current Count : {counter}</Text>
			<Button
				title='Decrease'
				onPress={() => setCounter(counter - 1)}
			/>
		</View>
	);
};

export default CounterScreen;

const styles = StyleSheet.create({
	counter: {
		fontSize: 30
	}
});