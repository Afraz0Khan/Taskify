import { Text, SafeAreaView, TouchableOpacity, Image, View, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState,  } from 'react';
import { auth, ready_user } from './api';
import { useNavigation } from '@react-navigation/core';
import styles from './Styles';
import { get_data, ready_schedule } from './api';
import TaskCard from './tasks';




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
                if ((data != undefined)){
                    setData(data);
                    setHasTasks(true);
                    setIsLoading(false);
                    }
                
                else {
                    ready_user(auth.currentUser.uid)
                    ready_schedule(auth.currentUser.uid)
                    .then(() => {
                        setHasTasks(true);
                        setIsLoading(false)
                    })
                    }
                }
            )
        })
    })

    const handleSchedule = () => {
        navigation.navigate('Schedule')
    }

    
    const getTaskCards = () => {

        if (data != undefined){
            let task_cards = [];

            for (let index = 0; index < data.length; index++) {

                task_cards.push(
                    <TaskCard 
                        task_name={data[index]['task_name']} 
                        task_due_date={data[index]['due_date']['seconds']} 
                        task_time_needed={data[index]['time_needed']} 
                    />
                )
            }
            return task_cards;
        }
        return null
    }
    

    if (isLoading || !hasTasks) {

        return (
            <SafeAreaView style = {{justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}}>

                <Text style = {{fontSize: 20}}>
                    Loading your tasks ...
                </Text>

            </SafeAreaView>
        )
    }
    
    return (
    <SafeAreaView>
            <View style = {{flexDirection: 'row'}}>

                <TouchableOpacity onPress = {handleSignOut} style = {styles.signout_button}>

                    <Text>
                        Signout
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity onPress = {handleSchedule} style = {styles.create_schedule}>

                    <Text style = {styles.schedule_text}>
                        Smart Schedule
                    </Text>

                </TouchableOpacity>
            
            </View>

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