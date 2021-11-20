import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';







const ScheduleCard = (props) => {

    return(
        <View style = {styles.schedule_card}>

            <View>
                <Text style = {styles.schedule_head}>
                    {props.task_name}
                </Text>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.schedule_body}>
                    weightage: {props.weightage} %
                </Text>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.schedule_body}>
                    difficulty: {props.difficulty} %
                </Text>
            
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.schedule_body}>
                    due: {props.due}
                </Text>
            </View>

        </View>
    )
}


export default ScheduleCard;