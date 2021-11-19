import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import styles from './Styles';
import { get_data } from './api';
import { useNavigation } from '@react-navigation/core';






const ScheduleCard = (props) => {

    return(
        <View style = {styles.task_card}>

            <View>
                <Text style = {styles.task_head}>
                    {props.task_name}
                </Text>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.task_body}>
                    difficulty: {props.difficulty} %
                </Text>
            
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.task_body}>
                    due: {props.due}
                </Text>
            </View>

        </View>
    )
}


export default ScheduleCard;