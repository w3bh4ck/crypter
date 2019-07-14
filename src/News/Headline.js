import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";
import { Card, Image, Divider, Tile } from "react-native-elements";

const Headline = () => {
	return (
		<View>
			<View style={styles.container}>
				{/* <Image
					style={{ width: "100%", height: "100%" }}
					resizeMode={"cover"}
					source={{ uri: "https://www.dailynews.com/wp-content/uploads/2017/09/img_3776.jpg" }}
					style={styles.trendingImage}
				/> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 5,
		borderRadius: 10,
		borderWidth: 0.5,
		borderColor: "#d6d7da",
		height: 150
	},
	divider: {
		marginTop: 10
	},
	trendingImage: {
		borderRadius: 10,
		width: "100%",
		height: "100%"
	},
	trendingText: {
		marginTop: 120,
		fontSize: 22,
		position: "absolute"
	}
});

export default Headline;
