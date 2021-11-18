import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import styles from './Styles';
import { get_data } from './api';
import { useNavigation } from '@react-navigation/core';



const TaskCard = (props) => {

    return(
        <View style = {styles.task_card}>

            <View>
                <Text style = {styles.task_head}>
                    {props.task_name}
                </Text>
            </View>
            
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.task_body}>
                    {props.task_due_date}
                </Text>
            </View>

        </View>
    )
}



export default TaskCard;