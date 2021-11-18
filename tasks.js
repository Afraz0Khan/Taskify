import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import styles from './Styles';
import { get_data } from './api';
import { useNavigation } from '@react-navigation/core';



const TaskList = () => {

    const navigation = useNavigation();

    useEffect(() => {
        const onAvailable = navigation.addListener('focus', ()=>{
            get_data();
        })
    })

    return(
        <SafeAreaView>
            <View style = {styles.task_container}>
                <Text>
                    hey sexy
                </Text>
            </View>
        </SafeAreaView>
    )
}



export default TaskList;