import { Text, SafeAreaView, TouchableOpacity, Image, View, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState,  } from 'react';
import { auth } from './api';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import add from './api';
import styles from './Styles';
import GetAssignmentCard from './assignmentcard';
import { add_task, get_data } from './api';
import TaskCard from './tasks';
import { Component } from 'react';



const Home = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [hasTasks, setHasTasks] = useState(false);


    const navigation = useNavigation();
    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
            setData([]);
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
    
    useEffect(() => {
        const onAvailable = navigation.addListener('focus', async () => { 
            get_data()
            .then(data => {
                if (data != undefined){
                    setData(data);
                    setIsLoading(false);
                    setHasTasks(true);
                    }
                }
            )
        })
    })


    
    const getTaskCards = () => {
        let task_cards = [];

        for (let index = 0; index < data.length; index++) {

            task_cards.push(
                <TaskCard 
                    task_name={data[index]['task_name']} 
                    task_due_date={data[index]['due_time']['seconds']} 
                />
            )
        }
        return task_cards;
    }
    

    if (isLoading || !hasTasks) {

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
                </View>

            </SafeAreaView>
        )
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

                    <View style = {{height: 500, marginTop: 20, borderRadius: 20}}>

                        <ScrollView>

                            {getTaskCards()}
                        
                        </ScrollView>

                    </View>

                </View> 

            </SafeAreaView>
    )

}



export default Home;