import *  as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from '../Screens/Login'
import Home from '../Screens/Home';

const Stack = createStackNavigator()

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName= "Login"
            screenOptions = {{
                headerShown: false,
                animationEnabled: false,
            }}>
               
            
                <Stack.Screen name='Login' component = {Login}/>  
                <Stack.Screen name="Home" component= {Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;