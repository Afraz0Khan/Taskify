import { Text, SafeAreaView, Button, TouchableOpacity, Image, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import { auth } from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import add from './api';
import styles from './Styles';
import AssignmentCard from './assignmentcard';
import DateTimePicker from '@react-native-community/datetimepicker';



const Home = () => {

    const navigation = useNavigation();
    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
        .catch(error => {
            alert(error.message)
        })
    }


    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [dueTime, setDueTime] = useState(new Date());




    return (
        <SafeAreaView>

            <TouchableOpacity onPress = {handleSignOut} style = {styles.signout_button}>

                <Text>
                    Signout
                </Text>

            </TouchableOpacity>

            <View style = {styles.create_schedule_wrap}>

                <Text style = {{marginBottom: 50, fontSize: 20}}>
                    Add assignments
                </Text>

                <TouchableOpacity>
                    <Image source = {require('./assets/plus.png')} 
                        style = {styles.plus_image}
                    />
                </TouchableOpacity>
            
            </View>



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

                <DateTimePicker
                    style={styles.date_view}
                    testID="dateTimePicker"
                    value={dueDate}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
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
                    
            </View>

        </SafeAreaView>
    )
}

export default Home;