import React, { Component } from 'react';
import { View, Alert, BackHandler, ScrollView, TouchableOpacity, FlatList, Keyboard, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import { Styles, Colors, Metrics, Fonts } from '@theme/';
import Types from '@actions/actionTypes';
import { Icon } from 'native-base';
import LeftButton from '@components/LeftButton';

class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	componentWillMount() {
		
	}

	render() {
		var i = 0;
		return (
			<View style={[ Styles.fullScreen, { flex: 1, backgroundColor: Colors.brandSecondary } ]}>
				<NavigationBar
					statusBar={{ style: 'light-content' }}
					style={Styles.nav}
					title={null}
					tintColor={Colors.brandPrimary}
					leftButton={<LeftButton onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}/>}
				/>

				<View style={{ flex: 1, backgroundColor: 'blue' }} />
			</View>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	const globals = state.get('globals');
	const navigator = state.get('routes');
	return { globals, navigator };
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
