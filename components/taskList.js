import React from 'react';
import {
  Text,
  View,
  FlatList
 } from 'react-native';
 import Styles from '../styles';

 const TaskList = ({content, tasks}) => (
    <View style={Styles.listBox}>
      <Text style={Styles.title}>{content}:</Text>

      <FlatList
        style={{maxHeight: 200, width: '100%', flexGrow: 0}}
        data={tasks} 
        renderItem={({ item }) => {

          const dateArr = item.day.toDateString().split(' ');
          return (
            <View style={Styles.listItemBox}>
              <Text style={Styles.namesLeft}>{dateArr[2]} {dateArr[1]}</Text>
              <Text style={Styles.namesRight}>{item.content}</Text>
            </View>
        )}}
      />
    </View>
 )

 export default TaskList