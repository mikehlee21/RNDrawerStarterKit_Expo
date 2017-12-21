import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

const NavLeftButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{backgroundColor: 'transparent', padding: 5}}>
      <Icon name="ios-menu" style={{ fontSize: 30, color: '#fff', marginLeft: 10 }} />
    </TouchableOpacity>
  );
}

export default NavLeftButton;