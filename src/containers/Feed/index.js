import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Image, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import { Styles, Colors, Metrics, Fonts, Images } from '@theme/';
import Types from '@actions/actionTypes';
import NavLeftButton from '@components/NavLeftButton';
import { LinearGradient } from 'expo';
import { Icon } from 'native-base';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					_id: 1,
					image: Images.feed1
				},
				{
					_id: 2,
					image: Images.feed2
				},
			]
		};
	}

	componentWillMount() {
	}

	_renderItem = (item, index) => {
		return (
			<TouchableOpacity onPress={() => {this._onPressItem(index)}}>
				<View style={{ width: Metrics.screenWidth, height: Metrics.screenWidth * 0.5, justifyContent: 'flex-end' }}>
					<Image source={item.image} style={{ width: '100%', height: '100%', position: 'absolute'}}/>
					<Text style={{ marginHorizontal: 20, marginBottom: 10, fontSize: 20, fontWeight: '700', color: 'white', backgroundColor: 'transparent' }}>Welcome to Dubai</Text>
					<Text style={{ marginHorizontal: 20, marginBottom: 15, fontSize: 16, fontWeight: '300', color: 'white', backgroundColor: 'transparent' }}>Welcome to Dubai</Text>
				</View>
				<View style={{ paddingVertical: 15, paddingLeft: 20, paddingRight: 15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image source={Images.avatar} style={{width: 40, height: 40, borderRadius: 20}}/>
						<View style={{ marginLeft: 20 }}>
							<Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginBottom: 5 }}>Dubai Mall</Text>
							<Text style={{ fontSize: 16, fontWeight: '500', color: '#60242B'}}>@dubaimall</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ marginRight: 15, alignItems: 'flex-end' }}>
							<Text style={{ fontSize: 14, fontWeight: '500', color: 'black', marginBottom: 5 }}>9:00 - 19:00</Text>
							<Text style={{ fontSize: 14, fontWeight: '500', color: '#60242B'}}>1km far from you</Text>
						</View>
						<Icon name="md-pin" style={{ fontSize: 20, color: '#172A39' }}/>
					</View>
				</View>
			</TouchableOpacity>
		);
	}

	_onPressItem = (index) => {
		console.log(index);
	}

	render() {
		var i = 0;
		return (
			<View style={ Styles.fullScreen }>
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
				<ScrollView style={{ flex: 1 }}>
					<View style={{ width: Metrics.screenWidth, height: Metrics.screenWidth * 0.7, justifyContent: 'flex-end' }}>
						<Image source={require('../../../assets/9.jpg')} style={{ width: '100%', height: '100%', position: 'absolute' }}/>
						<Text numberOfLines={2} style={{ marginLeft: 20, marginRight: 100, marginBottom: 30, fontSize: 35, fontWeight: '500', color: 'white', backgroundColor: 'transparent' }}>Welcome to Dubai</Text>
					</View>
					<FlatList
						data={this.state.data}
						renderItem={({item, index}) => this._renderItem(item, index)}
						keyExtractor={item => item._id}
						>
					</FlatList>
				</ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
