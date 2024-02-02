import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';



export default function OrderplacedScreen() {
     const navigate=useNavigation();
     useEffect(() => {
          setTimeout(()=>{
               navigate.navigate('Home');
        
        
          },2000)
        }, [])

  return (
     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          {/* <Text style={{color:'green',fontWeight:"bold",fontSize:60}}>Orderplaced</Text> */}
    <LottieView source={require('../assets/orderPlaced.json')} style={{height:600,width:600,alignSelf:'center'}} autoPlay loop/>

     </View>
  );
}