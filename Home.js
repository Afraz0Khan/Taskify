import { Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { auth } from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

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
            <Text>
                Home
            </Text>
            <Text>
                email:{auth.currentUser?.email} 
            </Text>

            <Button title = {'Signout'} onPress = {handleSignOut} />
        </SafeAreaView>
    )
}

export default Home;