import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

const Headline = () => {
	return (
		<View>
			{/* <View style={styles.container}>
				<Text style={styles.title}>Title</Text>
			</View> */}
			<Card title="Trending">
				<Image
					source={{
						uri: "https://www.dailynews.com/wp-content/uploads/2017/09/img_3776.jpg"
					}}
					style={{ height: 200, width: 300 }}
				/>
				<Text style={{ marginBottom: 10 }}>
					The idea with React Native Elements is more about component structure than actual design.
				</Text>
			</Card>
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
	},
	title: {
		marginBottom: 0
	}
});

export default Headline;
