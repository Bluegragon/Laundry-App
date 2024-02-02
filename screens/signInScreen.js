import React, { useState } from 'react';
import { View, StyleSheet,Image, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userSignIn } from '../Firebase/FirebaseMethods';
import { useNavigation } from '@react-navigation/native';

const SignInForm = () => {
     const navigate=useNavigation()
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async() => {
   await userSignIn(email,password,phone);

    // Implement your sign-in logic here
    console.log('Signing in with:', { email, phone, password });
    // Add your authentication logic, API calls, etc.
  };

  return (<SafeAreaView style={{backgroundColor:'#FFF',height:'100%'}}>
     <Image style={{height:350,width:350,alignSelf:'center'}} source={require('../assets/icon.png')}/>
     
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#E32636',underlineColor:'transparent',}}}

      />
      <TextInput
        label="Phone Number"
        value={phone}
        onChangeText={text => setPhone(text)}
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#E32636',underlineColor:'transparent',}}}

      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#E32636',underlineColor:'transparent',}}}
      />
      <Button mode="contained" onPress={handleSignIn} style={styles.button}>
        Sign In
      </Button>
    </View></SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 8,
   
  },
  button: {
    marginTop: 16,
    backgroundColor:'#E32636',
  },
});

export default SignInForm;
