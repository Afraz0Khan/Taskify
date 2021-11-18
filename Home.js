import { Text, SafeAreaView, Button, TouchableOpacity, Image, View, TextInput } from 'react-native';
import React, {useEffect, useState} from 'react';
import { auth } from './api';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import add from './api';
import styles from './Styles';
import GetAssignmentCard from './assignmentcard';
import { add_task, get_data } from './api';
import TaskCard from './tasks';



const Home = () => {

    const [data, setData] = useState([]);

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
        const onAvailable = navigation.addListener('focus', async ()=>{
            const all_data = await get_data();
            setData(all_data);
        })
        console.log(data);
        console.log(data.tasks);
    })

    

    const getTaskCards = () => {

        let task_cards = [];

        for (let index = 0; index < data.tasks.length; index++) {

            task_cards.push(<TaskCard 

                task_name={data.tasks[index]['task_name']} 

                task_due_date={data.tasks[index]['due_time']} 

            />)
        
        }

        return task_cards;

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

                <View>
                    {getTaskCards()}
                </View>

            </View>

                

        </SafeAreaView>
    )
}



export default Home;