import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import TitleBar from "./TitleBar";
import Headline from "../News/Headline";
import { Card, ListItem, Button, Icon } from "react-native-elements";

class Layout extends Component {
	render() {
		return (
			<View>
				<TitleBar />
				<Headline />
			</View>
		);
	}
}

export default Layout;
