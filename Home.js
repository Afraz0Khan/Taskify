import { Text, SafeAreaView, Button, TouchableOpacity, Image, View, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';
import { auth } from './api';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import add from './api';
import styles from './Styles';
import GetAssignmentCard from './assignmentcard';
import { add_task, get_data } from './api';
import TaskList from './tasks';



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

    const handleAddTask = () => {
        try {
            navigation.navigate('GetAssignmentCard')
        }
        catch (error) {
            alert(error.message)
        }
        
    }
    
    

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

                <TouchableOpacity onPress = {handleAddTask}>
                    <Image source = {require('./assets/plus.png')} 
                        style = {styles.plus_image}
                    />
                </TouchableOpacity>

                <TaskList />

            </View>

                

        </SafeAreaView>
    )
}



export default Home;