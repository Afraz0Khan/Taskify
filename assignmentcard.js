import React, { Component, useState } from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from './Styles';
import DateTimePicker from '@react-native-community/datetimepicker';


const GetAssignmentCard = () => {


    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [dueTime, setDueTime] = useState(new Date());
    const [difficulty, setDifficulty] = useState(0)
    const [weightage, setWeightage] = useState(0)

    const min_date = new Date();
    const max_date = new Date();

    max_date.setDate(min_date.getDate() + 8);
    

   
        return (
        <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                <TextInput 
                    style = {styles.assign_data_input}
                    placeholder = "Task Name"
                    onChangeText = {
                        (text) => {
                            setTaskName(text);
                        }
                    }
                value = {taskName} /> 

                <TextInput
                    style = {styles.assign_data_input}
                    placeholder = "Task difficulty (%)"
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
                value = {difficulty}
                />

                <TextInput
                    style = {styles.assign_data_input}
                    placeholder = "Task Weightage (%)"
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
                    value = {weightage}
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

                <TouchableHighlight style = {styles.done_button}>
                    <Text style = {styles.done_text} >
                        Done
                    </Text>
                </TouchableHighlight>
                    
            </View>
    )

    
}


export default GetAssignmentCard;