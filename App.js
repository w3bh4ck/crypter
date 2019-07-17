/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import { ThemeProvider } from "react-native-elements";
import Layout from "./src/components/Layout";
import Navigation from "./src/components/Navigation";

// const instructions = Platform.select({
// 	ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
// 	android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
// });

const App = () => (
	<View>
		<Layout />
	</View>
);

export default App;
