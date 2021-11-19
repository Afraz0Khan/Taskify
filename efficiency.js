import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
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
import scheduleCard from './scheduleCard';




const efficientOrder = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [smartSchedule, setSmartSchedule] = useState([]);

    const navigation = useNavigation();


    const handleBack = () => {
        navigation.navigate('Home');
    }

    useEffect(() => {

        const onAvailable = navigation.addListener('focus', async () => {
            get_data()
            .then(data => {
                const input = convert_to_algo_input(data);
                const output = order(input);
                setSmartSchedule(output);
                setIsLoading(false);
            })
            } 
        )
    })

    const getScheduleCards = () => {
        let scheduleCards = [];
        for (let i = 0; i < smartSchedule.length; i++) {
            scheduleCards.push(
                <scheduleCard 
                    do_day = {smartSchedule[i][0]}
                    task_name={smartSchedule[i][1]}
                />
            )
        }
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
        <SafeAreaView style={styles.container}>
            {getScheduleCards()}
        </SafeAreaView>

    )
    

}

export default efficientOrder;

