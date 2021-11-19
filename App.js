import React from 'react';
import Login from './Login';
import Home from './Home';
import GetAssignmentCard from './assignmentcard';
import styles from './Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import efficientOrder from './efficiency';


const stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>

      <stack.Navigator>

        <stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        <stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

        <stack.Screen name="Schedule" component={efficientOrder} options={{ headerShown: false }} />

        <stack.Screen name="GetAssignmentCard" component={GetAssignmentCard} options={{ headerShown: false }} />

      </stack.Navigator>
      
    </NavigationContainer>
  );
}

