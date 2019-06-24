import React, { Component } from "react";
import { Text, View } from "react-native";
import TitleBar from "./TitleBar";
import Headline from "../News/Headline";

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
