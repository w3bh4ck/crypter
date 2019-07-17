import React from "react";
import { View, Text } from "react-native";
import { ListItem, Card, FlatList } from "react-native-elements";

const NewsItem = () => {
	return (
		<View>
			<Card>
				<ListItem
					title={"This is a news Item"}
					subtitle={"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}
					leftAvatar={{
						source: { uri: "https://www.dailynews.com/wp-content/uploads/2017/09/img_3776.jpg" }
					}}
				/>
			</Card>
		</View>
	);
};

export default NewsItem;
