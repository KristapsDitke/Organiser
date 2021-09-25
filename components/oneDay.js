import React from 'react';
import { 
    Text,
    TouchableOpacity
   } from 'react-native';
import Styles from '../styles';

const OneDay = ({ dayStyle, item, pressHandler }) => (       
        <TouchableOpacity style={{width: 40}} onPress={() => pressHandler(item)}>
                <Text style={dayStyle}>{item.date}</Text>
        </TouchableOpacity>
)

export default OneDay