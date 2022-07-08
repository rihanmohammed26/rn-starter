import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
	return (
		<View>
			<Button onPress={() => onIncrease()} title={`Increase ${color}`} />
			<Text style={{textAlign:'center'}}>{color}</Text>
			<Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default ColorCounter;
