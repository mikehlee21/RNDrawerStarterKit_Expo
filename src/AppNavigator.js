import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { Colors } from '@theme/';
import { StackNavigator } from 'react-navigation';
import MainContainer from '@containers/MainContainer';

const AppNavigator = StackNavigator(
	{
		main: { screen: MainContainer },
	},
	{
		initialRouteName: 'main',
		navigationOptions: {
			header: null,
			gesturesEnabled: false,
			cardStack: { gesturesEnabled: false }
		},
		headerMode: 'screen',
		lazyLoad: true
	}
);

export default AppNavigator;
