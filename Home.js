import { Text, SafeAreaView, Button, TouchableOpacity, TouchableHighlight, Image, View } from 'react-native';
import React from 'react';
import { auth } from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import add from './api';
import styles from './Styles';


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

    return (
        <SafeAreaView>

            <TouchableOpacity onPress = {handleSignOut} style = {styles.signout_button}>

                <Text>
                    Signout
                </Text>

            </TouchableOpacity>

            <View style = {styles.create_schedule_wrap}>

                <Text style = {{marginBottom: 50, fontSize: 20}}>
                    Create a Schedule
                </Text>

                <TouchableOpacity>
                    <Image source = {require('./assets/plus.png')} style = {styles.plus_image}/>
                </TouchableOpacity>
            
            </View>

        </SafeAreaView>
    )
}

export default Home;