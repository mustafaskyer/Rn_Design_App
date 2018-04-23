import React, { Component } from "react";
import { ScrollView, Image, BackHandler } from "react-native";
import { List, ListItem, Text, View, Content } from "native-base";

import styles from "./Styles/DrawerContentStyles";
import { Images } from "../Themes";

class DrawerContent extends Component {
	render() {
		const navigation = this.props.navigation;
		const items = this.props.items;
		return (
			<View style={styles.container}>
				<Image source={ require('../Images/logo.jpeg') } style={{ width:100, height:100 }} />
				<Content>
					<List>
						<ListItem onPress={() => navigation.navigate('HomeScreen')}>
							<Text>Home</Text>
						</ListItem>
						<ListItem onPress={() => navigation.navigate('Login')}>
							<Text>Logout</Text>
						</ListItem>
					</List>
				</Content>
			</View>
		);
	}
}

export default DrawerContent;
