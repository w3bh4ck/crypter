import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Headline = () => {
	return (
		<View>
			<View style={styles.container}>
				<Text>Title</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		borderRadius: 4,
		borderWidth: 0.5,
		borderColor: "#d6d7da",
		height: 150
	}
});

export default Headline;
