/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import Layout from "./src/components/Layout";

const instructions = Platform.select({
	ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
	android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

class App extends Component {
	render() {
		return (
			<View>
				<ThemeProvider>
					<Layout />
				</ThemeProvider>
			</View>
		);
	}
}

export default App;
