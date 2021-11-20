import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput, ScrollView } from 'react-native';
import styles from './Styles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { auth } from './api';
import {doc, setDoc} from '@firebase/firestore';
import { add_user, ready_user } from './api';
import { useIsFocused } from '@react-navigation/core';
import { get_data, ready_schedule, get_schedule_data } from './api';
import convert_to_algo_input from './imp_functions';
import order from './algo';
import ScheduleCard from './scheduleCard';




const efficientOrder = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [smartSchedule, setSmartSchedule] = useState();

    const navigation = useNavigation();


    const handleBack = () => {
        navigation.navigate('Home');
    }

    useEffect(() => {

        const onAvailable = navigation.addListener('focus', async () => {

            get_data()
            .then(data => {
                convert_to_algo_input(data)
                .then((filtered_data) => {
                    const output = order(filtered_data)
                    setSmartSchedule(output);
                    setIsLoading(false);
                    }
                )}
            )} 
        )
    })

    const getScheduleCards = () => {
        let scheduleCards = [];
        
        for (let i = 0; i < smartSchedule.length; i++) {
            const element = smartSchedule[i];

            scheduleCards.push(
                <ScheduleCard 
                    task_name = {element[1]}
                    difficulty = {element[3]}
                    due = {element[0]}
                />
            )
            
        }
        return scheduleCards;
  
    }

    if (isLoading){
        return(
            <SafeAreaView style={styles.container}>
                <Text style = {{fontSize: 20}}>
                    Loading smart schedule ...
                </Text>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView>
            <View style = {{flexDirection: 'row'}}>

                <TouchableOpacity onPress = {handleBack} style = {styles.back_button}>

                    <Text>
                        Back
                    </Text>

                </TouchableOpacity>
            </View>

            <Text style = {styles.smart_head_text}>
                Maximum efficiency order
            </Text>


            <ScrollView style = {{marginTop: 10, marginLeft: 25, height: 620}}>
                {getScheduleCards()}
            </ScrollView>
            
        </SafeAreaView>

    )
    

}

export default efficientOrder;

