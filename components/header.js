import React from 'react';
import {
  Text,
  View
 } from 'react-native';
 import Styles from '../styles';

 const Header = () => (
    <View style={Styles.headBox}>
        <Text style={Styles.headTitle}>My Calendar</Text>
    </View>
 )

 export default Header