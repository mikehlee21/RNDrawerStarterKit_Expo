import { DrawerNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View } from 'react-native';
import Feed from '@containers/Feed';
import Explore from '@containers/Explore';
import { Colors, Fonts, Metrics } from '@theme/';
import DrawerContent from '@components/DrawerContent';

const routeConfigs = {
	feed: {
		screen: Feed,
		navigationOptions: ({ navigation }) => ({
			drawerLockMode: 'locked-closed'
		})
	},
	explore: {
		screen: Explore,
		navigationOptions: ({ navigation }) => ({
			drawerLockMode: 'locked-closed'
		})
	}
};

const navigatorConfig = {
	drawerWidth: Metrics.screenWidth * 2 / 3,
	initialRouteName: 'feed',
	contentComponent: ({ navigation }) => <DrawerContent navigation={navigation} />,
	contentOptions: {
		activeTintColor: Colors.whiteColor,
		inactiveTintColor: Colors.brandPrimary,
		labelStyle: { ...Fonts.style.h2 },
		indicatorStyle: { height: 0 },
		scrollEnabled: false
	},
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
	drawerToggleRoute: 'DrawerToggle'
};

const MainNavigator = DrawerNavigator(routeConfigs, navigatorConfig);

export default MainNavigator;
