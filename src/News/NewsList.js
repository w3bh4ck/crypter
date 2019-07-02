import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import NewsItem from "./NewsItem";

const NewsList = () => {
	return (
		<View>
			<ScrollView bounces={false}>
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</ScrollView>
		</View>
	);
};

styles = {
	scroll: {
		flex: -1
	}
};

export default NewsList;
