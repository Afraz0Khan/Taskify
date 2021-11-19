import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';
import styles from './Styles';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { auth } from './api';
import {doc, setDoc} from '@firebase/firestore';
import { add_user, ready_user } from './api';




const efficientOrder = () => {
}