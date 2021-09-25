import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
 } from 'react-native';
 import Header from './components/header';
 import Calendar from './components/calendar';
 import Styles from './styles';
 import TaskInput from './components/taskInput';
 import TaskList from './components/taskList';

const App = () => {
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [tasksForTheDay, setTasksForTheDay] = useState([])
  const d = new Date();
  const weekDayNumber = d.getDay();
  const todayDate = d.getUTCDate();
  const firstDateOnArray = new Date(d);
  
  if(weekDayNumber === 0){
    firstDateOnArray.setDate(firstDateOnArray.getDate() - 6)
  } else {
    firstDateOnArray.setDate(firstDateOnArray.getDate() - (weekDayNumber - 1))
  }

  useEffect(() => {   
    const arr = []
    for(let i = 1; i <= 35; i++){
      const input = new Date();
      input.setDate(firstDateOnArray.getDate() + (i - 1))
      const value = input.getDate();
      // const longDateString = input.toDateString();
      arr.push({day: i, date: value, fullDate: input});
    }
    setDays(arr)
  }, [])

  const tasksForDay = () => {
    setTasksForTheDay(() => { 
      return tasks.filter(task => task.day === selectedDay.fullDate)
    });
  }

  const selectingDayHandler = (day) => {
    setSelectedDay(day);
    setTasksForTheDay(() => { 
      return tasks.filter(task => task.day === day.fullDate)
    });
  }

  const addingTasksHandler = () => {
    
    if(description === ''){
      Alert.alert('No Input!','In the Input field must be some data.', [
        {text: 'Understood', onPress: () => console.log('Done')},
        {text: 'Other option'}
      ]);     
    }else{
      setTasks((prevTasks) => {
        const arrLength = prevTasks.length;
        prevTasks.push({key: arrLength + 1, content: description, day: selectedDay.fullDate});
        return prevTasks.sort((a, b) => a.day - b.day);
      })
      
      setDescription('');
      setSelectedDay(null);
      tasksForDay();
    }     
  }
  
  return (
    // <TouchableWithoutFeedback 
    //   onPress={
    //   Keyboard.dismiss()
    //   }>
      <View style={Styles.appContainer}>

        <Header/>

        <View style={Styles.appSection}>
          <View>
                    
            { ! selectedDay && 
              <View>

                <Calendar days={days} today={d} pressDay={selectingDayHandler} />

                {tasks.length > 0 && <TaskList content='All list' tasks={tasks}/>}

              </View>  
            }
            
            {selectedDay &&
              <View style={Styles.appActionBox}>
                <TaskInput day={selectedDay} pressToAdd={addingTasksHandler} pressToReturn={setSelectedDay} value={setDescription}/>

                {tasksForTheDay.length > 0 && <TaskList content='Today already planned' tasks={tasksForTheDay}/>}
              </View>
            }
            
          </View>

          
        </View>
        
      </View>
    // </TouchableWithoutFeedback>
  );
}

export default App