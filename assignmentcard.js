import React, { Component, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { add_task } from './api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core';



const GetAssignmentCard = () => {

    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [dueTime, setDueTime] = useState(new Date());
    const [difficulty, setDifficulty] = useState(0);
    const [weightage, setWeightage] = useState(0);
    const [timeNeeded, setTimeNeeded] = useState(0);


    const navigation = useNavigation();
    const min_date = new Date();
    const max_date = new Date();

    max_date.setDate(min_date.getDate() + 8);

    const handleDone = () => {

    
        var data = {
            
            task_name: taskName,
            due_date: dueDate,
            due_time: dueTime,
            difficulty: difficulty,
            weightage: weightage,
            time_needed: timeNeeded

        }

        add_task(data);

        setTaskName('');
        setDueDate(new Date());
        setDueTime(new Date());
        setDifficulty(0)
        setWeightage(0)
        setTimeNeeded(0)

        navigation.navigate('Home');
    }

    const handleCancel = () => {
        navigation.navigate('Home');

        setTaskName('');
        setDueDate(new Date());
        setDueTime(new Date());
        setDifficulty(0)
        setWeightage(0)
        setTimeNeeded(0)
    }



        return (
            <SafeAreaView>
                <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
                    <TextInput 
                        style = {styles.assign_data_input}
                        placeholder = "Task Name"
                        value = {taskName} 
                        onChangeText = {
                            (text) => {
                                setTaskName(text);
                            }
                        }
                    /> 

                    <TextInput
                        style = {styles.assign_data_input}
                        placeholder = "Task difficulty (%)"
                        value = {difficulty}
                        onChangeText = {
                            (percent) => {
                                if ((percent < 100) && (percent > 0)) {
                                    setDifficulty(percent)
                                }
                                else if (percent === ''){
                                    setDifficulty(percent)
                                }
                                else{
                                    alert('Please keep the difficulty in bounds.')
                                }
                            }
                        }
                    />

                    <TextInput
                        style = {styles.assign_data_input}
                        placeholder = "Task Weightage (%)"
                        value = {weightage}
                        onChangeText = {
                            (weight) => {
                                if ((weight < 100) && (weight > 0)) {
                                    setWeightage(weight)
                                }
                                else if (weightage === ''){
                                    setWeightage(percent)
                                }
                                else{
                                    alert('Please keep the weightage in bounds.')
                                }
                            }
                        }
                    />

                    <TextInput
                        style = {styles.assign_data_input}
                        placeholder = "Time needed (round to the nearest hour)"
                        value = {timeNeeded}
                        onChangeText = {
                            (timeNeeded) => {
                                if (((timeNeeded >= 1) && (timeNeeded < 24)) && !(timeNeeded.includes('.'))){
                                    setTimeNeeded(timeNeeded)
                                }
                                else if (timeNeeded === ''){
                                    setTimeNeeded(timeNeeded)
                                }
                                else{
                                    alert('Please keep the time in bounds.')
                                }
                            }
                        }
                    />
                    
                    

                    <Text style = {{marginTop: 20}}>
                        Choose Due Date:
                    </Text>


                    <DateTimePicker
                        style={styles.date_view}
                        testID="dateTimePicker"
                        value={dueDate}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        maximumDate={max_date}
                        minimumDate={min_date}
                        onChange={(event, date) => {
                            setDueDate(date);   
                        }}
                    />

                    <DateTimePicker
                        style={styles.time_view}
                        testID="dateTimePicker"
                        value={dueTime}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={(event, date) => {
                            setDueTime(date);
                        }}
                    />

                    <View style = {styles.button_container}>

                        <TouchableOpacity style = {styles.cancel_button} onPress={handleCancel}>

                            <Text style = {styles.cancel_text}>
                                Cancel
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.done_button} onPress = {handleDone}>

                            <Text style = {styles.done_text} >
                                Done
                            </Text>

                        </TouchableOpacity>
                        
                    
                    </View>
                </View>
                
            </SafeAreaView>
        )
    
}


export default GetAssignmentCard;