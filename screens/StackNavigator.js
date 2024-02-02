import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Homescreen from './Homescreen';
import WelcomeScreen from './WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import PickupScreen from './pickupScreen';
import CartScreen from './cartScreen';
import SignInForm from './signInScreen';
import LogInForm from './loginScreen';
import { auth } from '../Firebase/firebaseConfig';
import OrderplacedScreen from './orderPlacedScreen';



const StackNavigator = () => {
  const [flag, setFlag] = useState(false)
  
  const unsubscribe =auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      setFlag(true);
    }
  })
     const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
    {!flag ? <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="SignIn" component={SignInForm} options={{headerShown:false}} />
      <Stack.Screen name="LogIn" component={LogInForm} options={{headerShown:false}} />
       </Stack.Navigator> :
       <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Homescreen} options={{headerShown:false}} />
        <Stack.Screen name="Pickup" component={PickupScreen} options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}} />
        <Stack.Screen name="Orderplaced" component={OrderplacedScreen} options={{headerShown:false}} />

      </Stack.Navigator>}
    </NavigationContainer>
  )
}

export default StackNavigator;