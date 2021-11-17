import { Text, SafeAreaView, Button, TouchableOpacity, Image, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import { auth } from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import add from './api';
import styles from './Styles';
import GetAssignmentCard from './assignmentcard';
import { render } from 'react-dom';




const Home = () => {

    const navigation = useNavigation();
    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
        .catch(error => {
            alert(error.message)
        })
    }

    const [ifOpen, setIfOpen] = useState(false);

    
    
    if (ifOpen) {
        const comp = <GetAssignmentCard />
    }
    else{
        const comp = <View style = {styles.create_schedule_wrap}>

        <Text style = {{marginBottom: 50, fontSize: 20}}>
            Add assignments
        </Text>

        <TouchableOpacity>
            <Image source = {require('./assets/plus.png')} 
                style = {styles.plus_image}
            />
        </TouchableOpacity>
    
        </View>
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

            <TouchableOpacity>
                <Image source = {require('./assets/plus.png')} 
                    style = {styles.plus_image}
                />
            </TouchableOpacity>
        
            </View>

            <GetAssignmentCard />
            

        </SafeAreaView>
    )
}

export default Home;