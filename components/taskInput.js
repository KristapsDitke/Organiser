import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
 } from 'react-native';
import Styles from '../styles';

const TaskInput = ({day, pressToAdd, pressToReturn, value}) => {

    const dateArr = day.fullDate.toDateString().split(' ');
    
    return (
    <View style={Styles.inputBox}>
        <Text>Your plans for {dateArr[0]} {dateArr[2]} {dateArr[1]} of {dateArr[3]}</Text>
                
        <TextInput
        multiline
        style={Styles.input}
        placeholder="What's on Your mind"
        onChangeText={(input) => value(input)} 
        />
        
        <View style={Styles.inputPressObjectBox}>
        <TouchableOpacity style={Styles.inputPressObject} onPress={() => pressToAdd()}>
            <Text style={Styles.whiteText}>Add new task</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.inputPressObject} onPress={() => pressToReturn()}>
            <Text style={Styles.whiteText}>Return</Text>
        </TouchableOpacity>
        </View>
     </View>
)}

export default TaskInput