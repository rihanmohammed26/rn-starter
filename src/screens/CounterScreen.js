import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {

	switch (action.type) {
		case 'increment':
			return { ...state, count: state.count + action.payload };
		case 'decrement':
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
}

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 })
	return (
		<View>
			<Button
				title='Increase'
				onPress={() => dispatch({ type: 'increment', payload: 1 })}
			/>
			<Text style={styles.counter}>Current Count : {state.count}</Text>
			<Button
				title='Decrease'
				onPress={() => dispatch({ type: 'increment', payload: -1 })}
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