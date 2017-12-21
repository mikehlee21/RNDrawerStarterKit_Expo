import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import { Styles, Colors, Metrics, Fonts } from '@theme/';
import Types from '@actions/actionTypes';
import NavLeftButton from '@components/NavLeftButton';
import { LinearGradient } from 'expo';

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
					title={
						<LinearGradient
							colors={['#CA5B58', '#EAC5A3']}
							start={[0, 0.5]}
							end={[1, 0.5]}
							style={{ width: '100%', height: Metrics.navBarHeight + Metrics.statusBarHeight, marginBottom: -7 }}>
						</LinearGradient>
					}
					tintColor={Colors.brandPrimary}
					leftButton={<NavLeftButton onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}/>}
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
	return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
