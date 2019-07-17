import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Card, Image, Divider } from "react-native-elements";

const Headline = () => {
	return (
		<View>
			<Text style={styles.heading}>TOP STORIES</Text>
			<View style={styles.headLine}>
				<Image
					source={{
						uri: "https://www.dailynews.com/wp-content/uploads/2017/09/img_3776.jpg"
					}}
					style={{ height: 200, width: 300 }}
					PlaceholderContent={<ActivityIndicator />}
				/>
			</View>

			<Divider style={styles.divider} />
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
	heading: {
		marginTop: 5,
		alignSelf: "center"
	},
	headLine: {
		borderRadius: 8,
		alignSelf: "center",
		borderWidth: 1,
		borderColor: "#d6d7da"
	},
	divider: {
		marginTop: 10
	}
});

export default Headline;
