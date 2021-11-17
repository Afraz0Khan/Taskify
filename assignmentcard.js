import React, { Component, useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import styles from './Styles';



const AssignmentCard = () => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [open, setOpen] = useState(false);


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
            
            <Text style = {{marginTop: 20}}>
                Choose Due Date:
            </Text>

            <Button title="Open" onPress={() => setOpen(true)} />

            <DatePicker
                modal
                open={open}
                date={dueDate}
                onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />


                    
        </View>
    )
}


export default AssignmentCard;