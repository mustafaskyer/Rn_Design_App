import React from "react";
import { DrawerNavigator } from "react-navigation";
import ChatScreen from '../Containers/ChatScreen'
import ActivityScreen from '../Containers/ActivityScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import DetailsScreen from '../Containers/DetailsScreen'
import HomeScreen from '../Containers/HomeScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import ListviewExample from "../Containers/ListviewExample";
import CardExample from "../Containers/CardExample";
import DrawerContent from "../Containers/DrawerContent";

import styles from "./Styles/NavigationStyles";

const NavigationDrawer = DrawerNavigator({
  ChatScreen: { screen: ChatScreen },
  ActivityScreen: { screen: ActivityScreen },
  ProfileScreen: { screen: ProfileScreen },
  DetailsScreen: { screen: DetailsScreen },
  HomeScreen: { screen: HomeScreen },
  RegisterScreen: { screen: RegisterScreen },
		ListviewExample: { screen: ListviewExample },
		CardExample: { screen: CardExample },
	},
	{
		initialRouteName: "ListviewExample",
		contentComponent: props => <DrawerContent {...props} />,
	}
);

export default NavigationDrawer;
