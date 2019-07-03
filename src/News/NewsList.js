import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import NewsItem from "./NewsItem";

const NewsList = () => {
	return (
		<ScrollView bounces={false}>
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
			<NewsItem />
		</ScrollView>
	);
};

export default NewsList;
