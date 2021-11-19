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
            })
            } 
        )
    })

    if (isLoading) {
        return (
            <SafeAreaView>
                <View style = {styles.container}>
                    <Text style = {{fontSize: 20}}>
                        Loading Smart Schedule...
                    </Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={handleBack}>
                <Text>
                    Back
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default efficientOrder;