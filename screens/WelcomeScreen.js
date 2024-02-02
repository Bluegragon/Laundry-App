import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../Firebase/firebaseConfig";
const WelcomeScreen = () => {
  useEffect(() => {
    const unsubscribe =auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        navigate.navigate('Home');
      }
    })
  return unsubscribe;
  }, [])
  const navigate=useNavigation();
  return (
    <SafeAreaView style={styles.screen}>
      
      <Image style={{height:350,width:350,alignSelf:'center'}} source={require('../assets/icon.png')}/>

      <Text style={styles.content}>Sign in to enjoy the benifits of this app, have clean laundry at your door step with the best rates in the market</Text>
      <View style={{flexDirection:'row',alignContent:'space-around',gap:10}}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigate.navigate('SignIn')}>
          <Text style={styles.txt} >Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>navigate.navigate('LogIn')}>
          <Text style={styles.txt}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor:'#fff',
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 130,
    height:60,
    borderWidth:2,
    borderColor: "#E32636",
    justifyContent: "center",
    borderRadius:6
  },
heading: {
     fontSize:45,
     fontWeight:'600',
     color:"#E32636",
},txt:{
     color:"#E32636",
     margin:13,
     alignSelf:'center'
},
content:{
     margin:20, alignSelf:'center',
     color:"#E32636",
     fontSize:15,
     textAlign:'center',
}
});
