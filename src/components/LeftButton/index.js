import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'native-base';

const LeftButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon name="ios-menu" style={{ fontSize: 30, color: '#fff', marginLeft: 10 }} />
    </TouchableOpacity>
  );
}

export default LeftButton;