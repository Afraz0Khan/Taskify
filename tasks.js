import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';




const TaskCard = (props) => {

    var date = new Date(props.task_due_date*1000);
    var date_string = date.toDateString();

    return(
        <View style = {styles.task_card}>

            <View>
                <Text style = {styles.task_head}>
                    {props.task_name}
                </Text>
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.task_body}>
                    Time needed: {props.task_time_needed} hours
                </Text>
            
            </View>

            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.task_body}>
                    due: {date_string}
                </Text>
            </View>

        </View>
    )
}



export default TaskCard;