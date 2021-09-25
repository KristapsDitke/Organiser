import React from 'react';
import {
    View,
    FlatList
   } from 'react-native';
import Styles from '../styles';
import OneDay from './oneDay';
import Head from './head';

const Calendar = ({ days, today, pressDay }) => {
    
    return (
        <View style={Styles.calBox}>
            <Head />
            
            <FlatList
                numColumns={7}
                keyExtractor={(item) => item.day} 
                style={Styles.calList}
                data={days} 
                renderItem={({ item }) => {
                    // const dateArr = item.day.toDateString().split(' ');
                    var dayStyle = Styles.calDay;

                    if(item.fullDate.toDateString() === today.toDateString()){
                        dayStyle = Styles.calToday;
                    } else if (item.fullDate.getMonth() != today.getMonth()){
                        dayStyle = Styles.calDayNextMonth;
                    }

                    return (
                    <OneDay dayStyle={dayStyle} item={item} pressHandler={pressDay}/>
                )}}
            />
        </View>
)}

export default Calendar