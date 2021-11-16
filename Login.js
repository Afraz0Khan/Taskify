import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import styles from './Styles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { auth } from './firebase';
import add from './api';




const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('Home')
            }
        }   
        )
        return unsubscribe
    }, 
    [])
    


    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(
            userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
                console.log(user.uid);
                const data = {
                    uid: user.uid,
                    createdAt: user.metadata.creationTime,
                }

                add('users', user.email, data)
            }
        ).catch(
            error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('This email is already in use.')
                }
                else if (error.code === 'auth/invalid-email') {
                    alert('This is not a valid email.')
                }
            }
        )
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(
            userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
                console.log(user.uid);
            }
        )
        .catch(
            error => {
                if (error.code === 'auth/user-not-found') {
                    alert('Account not found.\n Please re-check your credentials.');
                }
                else if (error.code === 'auth/wrong-password') {
                    alert('Wrong password.\n Please re-check your credentials.');
                }
                else if (error.code === 'auth/invalid-email') {
                    alert('This is not a valid email.')
                }
            }
        )
    }

    return (
    <SafeAreaView style={styles.container}>

        <Text style = {{paddingBottom: 50, fontSize: 35}}>Done</Text>

        <Text style = {styles.login_header}>Sign up or Login</Text>

        <TextInput style = {styles.credential_input} 
            placeholder = "Email" 
            onChangeText = {(text) => setEmail(text)}
            value = {email}
        />

        <TextInput style = {styles.credential_input} 
            placeholder = "Password" 
            secureTextEntry = {true} 
            onChangeText = {(text) => setPassword(text)}
            value = {password}
        />

        <TouchableOpacity style = {styles.credential_button_signup} onPress = {
            () => {
                try {
                    handleSignUp();
                }
                catch (error) {
                    alert(error);
                }
            }
        }>
            <Text style = {styles.credential_button_text_signup}>Sign Up</Text>
        </TouchableOpacity> 

        <TouchableOpacity style = {styles.credential_button_login} onPress = {
            () => {
                try {
                    handleLogin();
                }
                catch (error) {
                    alert(error);
                }
            }
        }>
            <Text style = {styles.credential_button_text_login}>Login</Text>
        </TouchableOpacity>   
                                
    </SafeAreaView>
    );
}

export default Login;