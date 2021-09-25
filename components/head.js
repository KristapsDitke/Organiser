import React from 'react';
import {
    Text,
    View,
    FlatList
   } from 'react-native';
import Styles from '../styles';

const calendarHead = [
    {title: 'Mo', key: '1'},
    {title: 'Tu', key: '2'}, 
    {title: 'We', key: '3'},
    {title: 'Th', key: '4'},
    {title: 'Fr', key: '5'},
    {title: 'Sa', key: '6'},
    {title: 'Su', key: '7'}
];

const Head = () => (
    <View style={Styles.calHeadBox}>
        <FlatList
            numColumns={7}
            data={calendarHead}
            renderItem={({ item }) => (    
                <Text style={Styles.calHeadText}>{item.title}</Text>
                    
         )}/> 
    </View>
)

export default Head