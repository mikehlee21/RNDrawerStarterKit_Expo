import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { View, StyleSheet, Text, Image, Alert, TouchableOpacity, Switch} from 'react-native';
import { Metrics, Images, Colors, Styles, Fonts } from '@theme/';
import { DrawerItems } from 'react-navigation';
import {setData} from '@actions/globals';

class DrawerContent extends Component {

  _onPress = (index) => {
    var navigateTo = '';
    switch (index) {
      case 0:
        navigateTo = 'feed'
        break;
      case 1:
        navigateTo = 'feed'
        break;
      case 2:
        navigateTo = 'feed'
        break;
      case 3:
        navigateTo = 'feed'
        break;
      case 4:
        navigateTo = 'explore'
        break;
    }
    this.props.setData({selected: index});
    this.props.navigation.navigate(navigateTo)
  }

  renderSelectedBar = () => {
    return <View style={{ marginRight: 20, width: 2, height: 30, backgroundColor: '#CA5B58' }}></View>
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.drawerBack} style={styles.drawerBack}/>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={()=>{this._onPress(0)}} style={styles.menu}>
            {this.props.globals.data.selected == 0 && this.renderSelectedBar()}
            <Text style={styles.text}>
              Cinema
            </Text>  
          </TouchableOpacity>  
          <TouchableOpacity onPress={()=>{this._onPress(1)}} style={styles.menu}>
            {this.props.globals.data.selected == 1 && this.renderSelectedBar()}
              <Text style={styles.text}>
              Restaurants
            </Text>  
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._onPress(2)}} style={styles.menu}>
            {this.props.globals.data.selected == 2 && this.renderSelectedBar()}
              <Text style={styles.text}>
              Entertainment
            </Text>  
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._onPress(3)}} style={styles.menu}>
            {this.props.globals.data.selected == 3 && this.renderSelectedBar()}
              <Text style={styles.text}>
              Children
            </Text>  
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._onPress(4)}} style={styles.menu}>
            {this.props.globals.data.selected == 4 && this.renderSelectedBar()}
              <Text style={styles.text}>
              Explore
            </Text>  
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  menuContainer: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 50,
    backgroundColor: 'transparent'
  },
  drawerBack: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.4,
    position: 'absolute'
  },
  menu: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
    color: 'white'
  },
  selected: {
    fontSize: 22,
    fontWeight: '300',
    color: 'white'
  }
});
 
function mapDispatchToProps(dispatch) { 
  return {
    dispatch,
    setData: data=>dispatch(setData(data)),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
